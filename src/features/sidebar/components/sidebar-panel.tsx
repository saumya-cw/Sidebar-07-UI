import { PrimaryMenu } from './primary-menu'
import { ProjectsMenu } from './projects-menu'
import { UserInfo } from './user-info'
import { WorkspaceInfo } from './workspace-info'

export function SidebarPanel({ isCollapsed = false }: { isCollapsed?: boolean }) {
  return (
    <section className="flex h-full min-h-0 flex-col overflow-hidden bg-zinc-50">
      <section className="shrink-0">
        <WorkspaceInfo isCollapsed={isCollapsed} />
      </section>
      <section className="min-h-0 flex-1 overflow-y-auto">
        <PrimaryMenu isCollapsed={isCollapsed} />
        <ProjectsMenu isCollapsed={isCollapsed} />
      </section>
      <section className="shrink-0">
        <UserInfo isCollapsed={isCollapsed} />
      </section>
    </section>
  )
}
