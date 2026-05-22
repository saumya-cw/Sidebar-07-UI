import { Check, ChevronsUpDown } from "lucide-react";
import { useState } from "react";
import { Button } from "../../../shared/components/ui";
import { cn } from "../../../shared/lib";
import { useSidebar, useSidebarPanelMode } from "../context";
import { workspaceMenu, workspaces } from "../data/sidebar-navigation-data";
import {
	MenuActionItem,
	MenuContentPanel,
	MenuDivider,
	MenuPortal,
	MenuRoot,
	MenuSectionLabel,
	MenuTrigger,
	SidebarSection,
} from "./primitives";

type WorkspaceDropdownContentProps = {
	isMobile: boolean;
	activeWorkspaceId: string;
	onSelectWorkspace: (workspaceId: string) => void;
};

function WorkspaceMenuContent({
	isMobile,
	activeWorkspaceId,
	onSelectWorkspace,
}: WorkspaceDropdownContentProps) {
	return (
		<MenuPortal>
			<MenuContentPanel
				align="start"
				className="w-72 min-w-56"
				collisionPadding={8}
				side={isMobile ? "bottom" : "right"}
				sideOffset={isMobile ? 4 : 6}
			>
				<MenuSectionLabel>{workspaceMenu.label}</MenuSectionLabel>
				{workspaces.map((workspaceItem) => (
					<MenuActionItem
						key={workspaceItem.id}
						onSelect={() => onSelectWorkspace(workspaceItem.id)}
					>
						<span className="inline-flex size-6 items-center justify-center rounded-md border border-border">
							<workspaceItem.logo className="size-3.5" />
						</span>
						<span className="flex-1">{workspaceItem.name}</span>
						{workspaceItem.id === activeWorkspaceId ? (
							<Check className="size-4 text-muted-foreground" />
						) : null}
					</MenuActionItem>
				))}
				<MenuDivider />
				<MenuActionItem className="text-muted-foreground">
					<span className="inline-flex size-6 items-center justify-center rounded-md border border-border">
						<workspaceMenu.addItem.icon className="size-3.5" />
					</span>
					{workspaceMenu.addItem.title}
				</MenuActionItem>
			</MenuContentPanel>
		</MenuPortal>
	);
}

export function WorkspaceInfo() {
	const { isDesktopCollapsed } = useSidebar();
	const panelMode = useSidebarPanelMode();
	const isCollapsed = panelMode === "desktop" && isDesktopCollapsed;
	const isMobile = panelMode === "mobile";
	const [activeWorkspaceId, setActiveWorkspaceId] = useState(
		workspaces[0]?.id ?? "",
	);
	const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false);
	const activeWorkspace = workspaces.find(
		(workspace) => workspace.id === activeWorkspaceId,
	);

	if (!activeWorkspace) {
		return null;
	}

	return (
		<SidebarSection aria-label="Workspace info" className="pt-2">
			<MenuRoot
				modal={false}
				onOpenChange={setIsWorkspaceMenuOpen}
				open={isWorkspaceMenuOpen}
			>
				<MenuTrigger asChild>
					<Button
						aria-expanded={isWorkspaceMenuOpen}
						aria-haspopup="menu"
						aria-label="Open workspace options"
						className={cn(
							"inline-flex h-12 w-full items-center rounded-lg text-left text-sidebar-foreground",
							isCollapsed ? "justify-center px-0" : "justify-between px-2",
						)}
						data-sidebar-focusable="true"
						tabIndex={0}
						variant="ghost"
					>
						<span className="inline-flex items-center gap-2">
							<span className="inline-flex size-8 items-center justify-center rounded-xl bg-sidebar-primary text-sidebar-primary-foreground">
								<activeWorkspace.logo className="size-4" />
							</span>
							{!isCollapsed ? (
								<span className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium text-sidebar-foreground">
										{activeWorkspace.name}
									</span>
									<span className="truncate text-muted-foreground text-xs">
										{activeWorkspace.plan}
									</span>
								</span>
							) : null}
						</span>
						{!isCollapsed ? (
							<ChevronsUpDown
								aria-hidden="true"
								className="size-4 text-muted-foreground"
							/>
						) : null}
					</Button>
				</MenuTrigger>
				<WorkspaceMenuContent
					activeWorkspaceId={activeWorkspace.id}
					isMobile={isMobile}
					onSelectWorkspace={setActiveWorkspaceId}
				/>
			</MenuRoot>
		</SidebarSection>
	);
}
