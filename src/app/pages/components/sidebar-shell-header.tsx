import { PanelLeft } from "lucide-react";
import { useSidebar } from "../../../features/sidebar/components";
import { Button } from "../../../shared/components/ui";

export function SidebarShellHeader() {
	const { openMobileSidebar, toggleDesktopSidebar } = useSidebar();

	return (
		<>
			<header className="sticky top-0 z-10 flex h-14 items-center border-border border-b bg-background px-4 lg:hidden">
				<Button
					aria-label="Open sidebar"
					className="size-8 text-muted-foreground"
					onClick={openMobileSidebar}
					size="icon"
					variant="ghost"
				>
					<PanelLeft className="size-4" />
				</Button>
			</header>
			<header className="hidden h-14 items-center bg-background px-4 lg:flex">
				<Button
					aria-label="Toggle sidebar"
					className="size-8 text-muted-foreground"
					onClick={toggleDesktopSidebar}
					size="icon"
					variant="ghost"
				>
					<PanelLeft className="size-4" />
				</Button>
				<span aria-hidden="true" className="mx-3 h-5 w-px bg-border" />
				<nav
					aria-label="Breadcrumb"
					className="inline-flex items-center gap-2 text-sm"
				>
					<span className="text-muted-foreground">Build Your Application</span>
					<span className="text-muted-foreground">{">"}</span>
					<span className="font-medium text-foreground">Data Fetching</span>
				</nav>
			</header>
		</>
	);
}
