import * as Collapsible from '@radix-ui/react-collapsible'
import { ChevronRight } from 'lucide-react'
import {
  type PrimaryNavigationGroup,
  primaryNavigationGroups,
} from '../data/sidebar-navigation-data'
import {
  SidebarList,
  SidebarListItem,
  SidebarRowButton,
  SidebarSection,
  SidebarSectionLabel,
  SidebarTooltip,
} from './primitives'

function PrimarySubmenu({
  items,
  isCollapsed,
}: {
  items: readonly string[]
  isCollapsed: boolean
}) {
  if (isCollapsed) return null
  return (
    <SidebarList className="mt-0.5 pl-7">
      {items.map((title) => (
        <SidebarListItem key={title}>
          <SidebarRowButton compact className="justify-start">
            {title}
          </SidebarRowButton>
        </SidebarListItem>
      ))}
    </SidebarList>
  )
}

function PrimaryGroupRow({
  group,
  isCollapsed,
}: {
  group: PrimaryNavigationGroup
  isCollapsed: boolean
}) {
  return (
    <Collapsible.Root defaultOpen={group.defaultOpen}>
      <Collapsible.Trigger asChild>
        <SidebarTooltip content={group.title} disabled={!isCollapsed}>
          <SidebarRowButton
            className={isCollapsed ? 'group justify-center px-0' : 'group'}
            aria-label={group.title}
          >
            <span className="inline-flex items-center gap-2">
              <group.icon className="size-4 text-zinc-900" />
              {!isCollapsed ? <span className="text-zinc-900">{group.title}</span> : null}
            </span>
            {!isCollapsed ? (
              <ChevronRight className="size-4 text-zinc-900 transition-transform group-data-[state=open]:rotate-90" />
            ) : null}
          </SidebarRowButton>
        </SidebarTooltip>
      </Collapsible.Trigger>
      {group.children ? (
        <Collapsible.Content>
          <PrimarySubmenu items={group.children} isCollapsed={isCollapsed} />
        </Collapsible.Content>
      ) : null}
    </Collapsible.Root>
  )
}

export function PrimaryMenu({ isCollapsed = false }: { isCollapsed?: boolean }) {
  return (
    <SidebarSection aria-label="Main navigation">
      {!isCollapsed ? <SidebarSectionLabel>Platform</SidebarSectionLabel> : null}
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
  )
}
