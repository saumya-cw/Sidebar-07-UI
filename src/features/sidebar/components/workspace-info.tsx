import { Check, ChevronsUpDown } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../../../shared/components/ui'
import { workspaceMenu, workspaces } from '../data/sidebar-navigation-data'
import {
  MenuActionItem,
  MenuContentPanel,
  MenuDivider,
  MenuPortal,
  MenuRoot,
  MenuSectionLabel,
  MenuTrigger,
  SidebarSection,
} from './primitives'

type WorkspaceInfoProps = { isCollapsed?: boolean }

type WorkspaceDropdownContentProps = {
  isMobile: boolean
  activeWorkspaceId: string
  onSelectWorkspace: (workspaceId: string) => void
}

function WorkspaceMenuContent({
  isMobile,
  activeWorkspaceId,
  onSelectWorkspace,
}: WorkspaceDropdownContentProps) {
  return (
    <MenuPortal>
      <MenuContentPanel
        side={isMobile ? 'bottom' : 'right'}
        align="start"
        sideOffset={isMobile ? 4 : 6}
        collisionPadding={8}
        className={
          isMobile
            ? 'w-[min(calc(100vw-1.5rem),var(--radix-dropdown-menu-trigger-width))] min-w-56'
            : 'w-[var(--radix-dropdown-menu-trigger-width)] min-w-56'
        }
      >
        <MenuSectionLabel>{workspaceMenu.label}</MenuSectionLabel>
        {workspaces.map((workspaceItem) => (
          <MenuActionItem
            key={workspaceItem.id}
            onSelect={() => onSelectWorkspace(workspaceItem.id)}
          >
            <span className="inline-flex size-6 items-center justify-center rounded-md border border-zinc-200">
              <workspaceItem.logo className="size-3.5" />
            </span>
            <span className="flex-1">{workspaceItem.name}</span>
            {workspaceItem.id === activeWorkspaceId ? (
              <Check className="size-4 text-zinc-700" />
            ) : null}
          </MenuActionItem>
        ))}
        <MenuDivider />
        <MenuActionItem className="text-zinc-500">
          <span className="inline-flex size-6 items-center justify-center rounded-md border border-zinc-200">
            <workspaceMenu.addItem.icon className="size-3.5" />
          </span>
          {workspaceMenu.addItem.title}
        </MenuActionItem>
      </MenuContentPanel>
    </MenuPortal>
  )
}

export function WorkspaceInfo({
  isCollapsed = false,
  isMobile = false,
}: WorkspaceInfoProps & { isMobile?: boolean }) {
  const [activeWorkspaceId, setActiveWorkspaceId] = useState(workspaces[0]?.id ?? '')
  const [isWorkspaceMenuOpen, setIsWorkspaceMenuOpen] = useState(false)
  const activeWorkspace = workspaces.find((workspace) => workspace.id === activeWorkspaceId)

  if (!activeWorkspace) {
    return null
  }

  return (
    <SidebarSection aria-label="Workspace info" className="pt-2">
      <MenuRoot open={isWorkspaceMenuOpen} onOpenChange={setIsWorkspaceMenuOpen} modal={false}>
        <MenuTrigger asChild>
          <Button
            variant="ghost"
            aria-label="Open workspace options"
            aria-haspopup="menu"
            aria-expanded={isWorkspaceMenuOpen}
            tabIndex={0}
            data-sidebar-focusable="true"
            className={`inline-flex h-12 w-full items-center rounded-lg text-left text-zinc-700 ${isCollapsed ? 'justify-center px-0' : 'justify-between px-2'}`}
          >
            <span className="inline-flex items-center gap-2">
              <span className="inline-flex size-8 items-center justify-center rounded-xl bg-zinc-900 text-white">
                <activeWorkspace.logo className="size-4" />
              </span>
              {!isCollapsed ? (
                <span className="grid flex-1 text-left text-sm leading-tight">
                  <span className="truncate font-medium text-zinc-900">{activeWorkspace.name}</span>
                  <span className="truncate text-xs text-zinc-500">{activeWorkspace.plan}</span>
                </span>
              ) : null}
            </span>
            {!isCollapsed ? (
              <ChevronsUpDown aria-hidden="true" className="size-4 text-zinc-400" />
            ) : null}
          </Button>
        </MenuTrigger>
        <WorkspaceMenuContent
          isMobile={isMobile}
          activeWorkspaceId={activeWorkspace.id}
          onSelectWorkspace={setActiveWorkspaceId}
        />
      </MenuRoot>
    </SidebarSection>
  )
}
