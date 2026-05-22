import { Folder, Forward, MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "../../../shared/components/ui";
import { cn } from "../../../shared/lib";
import { useSidebar, useSidebarPanelMode } from "../context";
import { projectNavigationItems } from "../data/sidebar-navigation-data";
import {
	MenuActionItem,
	MenuContentPanel,
	MenuDivider,
	MenuPortal,
	MenuRoot,
	MenuTrigger,
	SidebarList,
	SidebarListItem,
	SidebarRowButton,
	SidebarSection,
	SidebarSectionLabel,
} from "./primitives";

export function ProjectsMenu() {
	const { isDesktopCollapsed } = useSidebar();
	const panelMode = useSidebarPanelMode();
	const isCollapsed = panelMode === "desktop" && isDesktopCollapsed;
	const isMobile = panelMode === "mobile";

	if (isCollapsed) return null;
	return (
		<SidebarSection aria-label="Projects menu" className="pt-5">
			<SidebarSectionLabel className="pt-0">Projects</SidebarSectionLabel>
			<nav aria-label="Projects navigation">
				<SidebarList>
					{projectNavigationItems.map((projectItem) => (
						<SidebarListItem key={projectItem.id}>
							<span className="group inline-flex w-full items-center gap-1">
								<SidebarRowButton className="justify-start">
									<span className="inline-flex items-center gap-2">
										<projectItem.icon className="size-4 text-sidebar-foreground" />
										<span className="text-sidebar-foreground">
											{projectItem.title}
										</span>
									</span>
								</SidebarRowButton>

								<MenuRoot>
									<MenuTrigger asChild>
										<Button
											aria-haspopup="menu"
											aria-label={`${projectItem.title} actions`}
											className={cn(
												"inline-flex size-8 shrink-0 items-center justify-center rounded-md text-muted-foreground transition-opacity hover:bg-sidebar-accent focus:opacity-100 focus:outline-none focus-visible:opacity-100 data-[state=open]:opacity-100",
												isMobile
													? "opacity-100"
													: "opacity-0 group-focus-within:opacity-100 group-hover:opacity-100",
											)}
											data-sidebar-focusable="true"
											size="icon"
											tabIndex={0}
											variant="ghost"
										>
											<MoreHorizontal className="size-4" />
										</Button>
									</MenuTrigger>
									<MenuPortal>
										<MenuContentPanel
											align={isMobile ? "end" : "start"}
											className="min-w-44"
											collisionPadding={8}
											side={isMobile ? "bottom" : "right"}
											sideOffset={4}
										>
											<MenuActionItem>
												<Folder className="size-4 text-muted-foreground" />
												View Project
											</MenuActionItem>
											<MenuActionItem>
												<Forward className="size-4 text-muted-foreground" />
												Share Project
											</MenuActionItem>
											<MenuDivider />
											<MenuActionItem>
												<Trash2 className="size-4 text-muted-foreground" />
												Delete Project
											</MenuActionItem>
										</MenuContentPanel>
									</MenuPortal>
								</MenuRoot>
							</span>
						</SidebarListItem>
					))}
					<SidebarListItem>
						<span className="inline-flex h-8 w-full items-center gap-2 px-2 text-muted-foreground text-sm">
							<MoreHorizontal className="size-4 text-muted-foreground" />
							<span>More</span>
						</span>
					</SidebarListItem>
				</SidebarList>
			</nav>
		</SidebarSection>
	);
}
