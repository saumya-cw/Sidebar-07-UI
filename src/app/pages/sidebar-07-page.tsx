import { DashboardPreview } from "../../features/dashboard/components";
import {
	MobileSidebarDrawer,
	SidebarPanel,
	SidebarProvider,
	SidebarShellHeader,
	SidebarShellLayout,
	useSidebar,
} from "../../features/sidebar/components";

function Sidebar07PageContent() {
	const { isDesktopCollapsed, isMobileSidebarOpen, closeMobileSidebar } =
		useSidebar();

	return (
		<main className="h-screen overflow-hidden bg-page text-foreground">
			<MobileSidebarDrawer
				isOpen={isMobileSidebarOpen}
				onOpenChange={closeMobileSidebar}
			>
				<SidebarPanel mode="mobile" />
			</MobileSidebarDrawer>
			<SidebarShellLayout
				content={
					<>
						<SidebarShellHeader />
						<DashboardPreview />
					</>
				}
				isCollapsed={isDesktopCollapsed}
				sidebar={<SidebarPanel />}
			/>
		</main>
	);
}

export function Sidebar07Page() {
	return (
		<SidebarProvider>
			<Sidebar07PageContent />
		</SidebarProvider>
	);
}
