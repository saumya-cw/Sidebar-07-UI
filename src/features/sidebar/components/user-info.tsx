import { Bell, ChevronsUpDown, CreditCard, LogOut, ShieldCheck, Sparkles } from 'lucide-react'
import { Button } from '../../../shared/components/ui'
import { sidebarUser } from '../data/sidebar-navigation-data'
import {
  MenuActionItem,
  MenuContentPanel,
  MenuDivider,
  MenuPortal,
  MenuRoot,
  MenuTrigger,
} from './primitives'

export function UserInfo({
  isCollapsed = false,
  isMobile = false,
}: {
  isCollapsed?: boolean
  isMobile?: boolean
}) {
  return (
    <footer className="border-t border-zinc-200 p-3">
      <MenuRoot>
        <MenuTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Open user options"
            aria-haspopup="menu"
            tabIndex={0}
            data-sidebar-focusable="true"
            className={`inline-flex w-full items-center rounded-lg py-1.5 text-left transition-colors hover:bg-zinc-100 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-2'}`}
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-full bg-zinc-200 text-xs font-medium text-zinc-700">
                {sidebarUser.initials}
              </span>
              {!isCollapsed ? (
                <span className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-zinc-900">{sidebarUser.name}</span>
                  <span className="truncate text-xs text-zinc-500">{sidebarUser.email}</span>
                </span>
              ) : null}
            </span>
            {!isCollapsed ? (
              <ChevronsUpDown aria-hidden="true" className="size-4 text-zinc-400" />
            ) : null}
          </Button>
        </MenuTrigger>
        <MenuPortal>
          <MenuContentPanel
            side={isMobile ? 'top' : 'right'}
            align="end"
            sideOffset={isMobile ? 4 : 6}
            collisionPadding={8}
            className={
              isMobile
                ? 'w-[min(calc(100vw-1.5rem),var(--radix-dropdown-menu-trigger-width))] min-w-56'
                : 'w-[var(--radix-dropdown-menu-trigger-width)] min-w-56'
            }
          >
            <MenuActionItem>
              <Sparkles className="size-4 text-zinc-600" />
              Upgrade to Pro
            </MenuActionItem>
            <MenuDivider />
            <MenuActionItem>
              <ShieldCheck className="size-4 text-zinc-600" />
              Account
            </MenuActionItem>
            <MenuActionItem>
              <CreditCard className="size-4 text-zinc-600" />
              Billing
            </MenuActionItem>
            <MenuActionItem>
              <Bell className="size-4 text-zinc-600" />
              Notifications
            </MenuActionItem>
            <MenuDivider />
            <MenuActionItem>
              <LogOut className="size-4 text-zinc-600" />
              Log out
            </MenuActionItem>
          </MenuContentPanel>
        </MenuPortal>
      </MenuRoot>
    </footer>
  )
}
