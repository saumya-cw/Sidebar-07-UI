import type { ReactNode } from "react";
import { cn } from "../../../../shared/lib";

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
		<section className="flex h-full w-full">
			<aside
				aria-label="Desktop sidebar"
				className={cn(
					"hidden h-full min-h-0 shrink-0 border-sidebar-border border-r bg-sidebar transition-all duration-200 lg:block",
					isCollapsed ? "w-15" : "w-64",
				)}
			>
				{sidebar}
			</aside>
			<section className="flex h-full min-w-0 flex-1 flex-col">
				{content}
			</section>
		</section>
	);
}
