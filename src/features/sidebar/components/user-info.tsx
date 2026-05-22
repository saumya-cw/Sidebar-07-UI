import {
	Bell,
	ChevronsUpDown,
	CreditCard,
	LogOut,
	ShieldCheck,
	Sparkles,
} from "lucide-react";
import { Button } from "../../../shared/components/ui";
import { useSidebar, useSidebarPanelMode } from "../context";
import { sidebarUser } from "../data/sidebar-navigation-data";
import {
	MenuActionItem,
	MenuContentPanel,
	MenuDivider,
	MenuPortal,
	MenuRoot,
	MenuTrigger,
} from "./primitives";

export function UserInfo() {
	const { isDesktopCollapsed } = useSidebar();
	const panelMode = useSidebarPanelMode();
	const isCollapsed = panelMode === "desktop" && isDesktopCollapsed;
	const isMobile = panelMode === "mobile";

	return (
		<footer className="border-sidebar-border border-t p-3">
			<MenuRoot>
				<MenuTrigger asChild>
					<Button
						aria-haspopup="menu"
						aria-label="Open user options"
						className={`inline-flex w-full items-center rounded-lg py-1.5 text-left transition-colors hover:bg-sidebar-accent ${isCollapsed ? "justify-center px-0" : "justify-between px-2"}`}
						data-sidebar-focusable="true"
						tabIndex={0}
						variant="ghost"
					>
						<span className="inline-flex items-center gap-2">
							<span className="inline-flex size-8 items-center justify-center rounded-full bg-muted font-medium text-muted-foreground text-xs">
								{sidebarUser.initials}
							</span>
							{!isCollapsed ? (
								<span className="grid flex-1 text-left text-sm leading-tight">
									<span className="truncate font-medium text-sidebar-foreground">
										{sidebarUser.name}
									</span>
									<span className="truncate text-muted-foreground text-xs">
										{sidebarUser.email}
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
				<MenuPortal>
					<MenuContentPanel
						align="end"
						className={
							isMobile
								? "w-[min(calc(100vw-1.5rem),var(--radix-dropdown-menu-trigger-width))] min-w-56"
								: "w-[var(--radix-dropdown-menu-trigger-width)] min-w-56"
						}
						collisionPadding={8}
						side={isMobile ? "top" : "right"}
						sideOffset={isMobile ? 4 : 6}
					>
						<MenuActionItem>
							<Sparkles className="size-4 text-muted-foreground" />
							Upgrade to Pro
						</MenuActionItem>
						<MenuDivider />
						<MenuActionItem>
							<ShieldCheck className="size-4 text-muted-foreground" />
							Account
						</MenuActionItem>
						<MenuActionItem>
							<CreditCard className="size-4 text-muted-foreground" />
							Billing
						</MenuActionItem>
						<MenuActionItem>
							<Bell className="size-4 text-muted-foreground" />
							Notifications
						</MenuActionItem>
						<MenuDivider />
						<MenuActionItem>
							<LogOut className="size-4 text-muted-foreground" />
							Log out
						</MenuActionItem>
					</MenuContentPanel>
				</MenuPortal>
			</MenuRoot>
		</footer>
	);
}
