import * as Tooltip from "@radix-ui/react-tooltip";
import type { ReactNode } from "react";

export function SidebarTooltip({
	content,
	children,
	disabled = false,
}: {
	content: string;
	children: ReactNode;
	disabled?: boolean;
}) {
	if (disabled) return children;
	return (
		<Tooltip.Provider delayDuration={120}>
			<Tooltip.Root>
				<Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
				<Tooltip.Portal>
					<Tooltip.Content
						className="z-50 rounded-md bg-primary px-3 py-1.5 font-medium text-primary-foreground text-sm shadow-sm"
						side="right"
						sideOffset={8}
					>
						{content}
						<Tooltip.Arrow className="fill-primary" height={4} width={8} />
					</Tooltip.Content>
				</Tooltip.Portal>
			</Tooltip.Root>
		</Tooltip.Provider>
	);
}
