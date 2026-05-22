import type { ReactNode } from "react";
import { cn } from "../../../shared/lib";

type SidebarShellLayoutProps = {
	isCollapsed: boolean;
	sidebar: ReactNode;
	content: ReactNode;
};

export function SidebarShellLayout({
	isCollapsed,
	sidebar,
	content,
}: SidebarShellLayoutProps) {
	return (
		<section
			className={cn(
				"grid h-full w-full grid-cols-1",
				isCollapsed ? "lg:grid-cols-[3.75rem_1fr]" : "lg:grid-cols-[16rem_1fr]",
			)}
		>
			<aside
				aria-label="Desktop sidebar"
				className="hidden h-full min-h-0 border-sidebar-border border-r bg-sidebar transition-[width] duration-200 lg:block"
			>
				{sidebar}
			</aside>
			<section className="flex h-full min-h-0 flex-col">{content}</section>
		</section>
	);
}
