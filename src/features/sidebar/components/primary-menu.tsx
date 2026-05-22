import * as Collapsible from "@radix-ui/react-collapsible";
import { ChevronRight } from "lucide-react";
import { useSidebar, useSidebarPanelMode } from "../context";
import type { PrimaryNavigationGroup } from "../data/sidebar-navigation-data";
import { primaryNavigationGroups } from "../data/sidebar-navigation-data";
import {
	SidebarList,
	SidebarListItem,
	SidebarRowButton,
	SidebarSection,
	SidebarSectionLabel,
	SidebarTooltip,
} from "./primitives";

function PrimarySubmenu({
	items,
	isCollapsed,
}: {
	items: readonly string[];
	isCollapsed: boolean;
}) {
	if (isCollapsed) return null;
	return (
		<SidebarList className="mt-0.5 ml-3.5 border-sidebar-border border-l pl-3.5">
			{items.map((title) => (
				<SidebarListItem key={title}>
					<SidebarRowButton className="justify-start" compact>
						{title}
					</SidebarRowButton>
				</SidebarListItem>
			))}
		</SidebarList>
	);
}

function PrimaryGroupRow({
	group,
	isCollapsed,
}: {
	group: PrimaryNavigationGroup;
	isCollapsed: boolean;
}) {
	const triggerButton = (
		<SidebarRowButton
			aria-label={group.title}
			className={isCollapsed ? "group justify-center px-0" : "group"}
		>
			<span className="inline-flex items-center gap-2">
				<group.icon className="size-4 text-sidebar-foreground" />
				{!isCollapsed ? (
					<span className="text-sidebar-foreground">{group.title}</span>
				) : null}
			</span>
			{!isCollapsed ? (
				<ChevronRight className="size-4 text-sidebar-foreground transition-transform group-data-[state=open]:rotate-90" />
			) : null}
		</SidebarRowButton>
	);

	return (
		<Collapsible.Root defaultOpen={group.defaultOpen ?? false}>
			{isCollapsed ? (
				<SidebarTooltip content={group.title}>
					<Collapsible.Trigger asChild>{triggerButton}</Collapsible.Trigger>
				</SidebarTooltip>
			) : (
				<Collapsible.Trigger asChild>{triggerButton}</Collapsible.Trigger>
			)}
			{group.children ? (
				<Collapsible.Content>
					<PrimarySubmenu isCollapsed={isCollapsed} items={group.children} />
				</Collapsible.Content>
			) : null}
		</Collapsible.Root>
	);
}

export function PrimaryMenu() {
	const { isDesktopCollapsed } = useSidebar();
	const panelMode = useSidebarPanelMode();
	const isCollapsed = panelMode === "desktop" && isDesktopCollapsed;

	return (
		<SidebarSection aria-label="Main navigation">
			{!isCollapsed ? (
				<SidebarSectionLabel>Platform</SidebarSectionLabel>
			) : null}
			<nav aria-label="Primary">
				<SidebarList>
					{primaryNavigationGroups.map((group) => (
						<SidebarListItem key={group.id}>
							<PrimaryGroupRow group={group} isCollapsed={isCollapsed} />
						</SidebarListItem>
					))}
				</SidebarList>
			</nav>
		</SidebarSection>
	);
}
