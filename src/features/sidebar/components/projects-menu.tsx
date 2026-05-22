import { Folder, Forward, MoreHorizontal, Trash2 } from 'lucide-react'
import { Button } from '../../../shared/components/ui'
import { projectNavigationItems } from '../data/sidebar-navigation-data'
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
} from './primitives'

export function ProjectsMenu({
  isCollapsed = false,
  isMobile = false,
}: {
  isCollapsed?: boolean
  isMobile?: boolean
}) {
  if (isCollapsed) return null
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
                    <projectItem.icon className="size-4 text-zinc-900" />
                    <span className="text-zinc-900">{projectItem.title}</span>
                  </span>
                </SidebarRowButton>

                <MenuRoot>
                  <MenuTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      aria-label={`${projectItem.title} actions`}
                      aria-haspopup="menu"
                      tabIndex={0}
                      data-sidebar-focusable="true"
                      className={`inline-flex size-8 shrink-0 items-center justify-center rounded-md text-zinc-700 transition-opacity hover:bg-zinc-100 focus:opacity-100 focus:outline-none focus-visible:opacity-100 data-[state=open]:opacity-100 ${isMobile ? 'opacity-100' : 'opacity-0 group-hover:opacity-100 group-focus-within:opacity-100'}`}
                    >
                      <MoreHorizontal className="size-4" />
                    </Button>
                  </MenuTrigger>
                  <MenuPortal>
                    <MenuContentPanel
                      side={isMobile ? 'bottom' : 'right'}
                      align={isMobile ? 'end' : 'start'}
                      sideOffset={4}
                      collisionPadding={8}
                      className="min-w-44"
                    >
                      <MenuActionItem>
                        <Folder className="size-4 text-zinc-600" />
                        View Project
                      </MenuActionItem>
                      <MenuActionItem>
                        <Forward className="size-4 text-zinc-600" />
                        Share Project
                      </MenuActionItem>
                      <MenuDivider />
                      <MenuActionItem>
                        <Trash2 className="size-4 text-zinc-600" />
                        Delete Project
                      </MenuActionItem>
                    </MenuContentPanel>
                  </MenuPortal>
                </MenuRoot>
              </span>
            </SidebarListItem>
          ))}
          <SidebarListItem>
            <span className="inline-flex h-8 w-full items-center gap-2 px-2 text-sm text-zinc-600">
              <MoreHorizontal className="size-4 text-zinc-600" />
              <span>More</span>
            </span>
          </SidebarListItem>
        </SidebarList>
      </nav>
    </SidebarSection>
  )
}
