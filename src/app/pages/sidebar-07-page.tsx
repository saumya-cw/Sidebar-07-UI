import { useState } from 'react'
import { DashboardPreview } from '../../features/dashboard/components'
import { MobileSidebarDrawer, SidebarPanel } from '../../features/sidebar/components'
import { SidebarShellHeader, SidebarShellLayout } from './components'

export function Sidebar07Page() {
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false)
  return (
    <main className="h-screen overflow-hidden bg-zinc-100 text-zinc-950">
      <MobileSidebarDrawer isOpen={isMobileSidebarOpen} onOpenChange={setIsMobileSidebarOpen}>
        <SidebarPanel />
      </MobileSidebarDrawer>
      <SidebarShellLayout
        isCollapsed={isCollapsed}
        sidebar={<SidebarPanel isCollapsed={isCollapsed} />}
        content={
          <>
            <SidebarShellHeader
              onOpenMobileSidebar={() => setIsMobileSidebarOpen(true)}
              onToggleDesktopSidebar={() => setIsCollapsed((value) => !value)}
            />
            <DashboardPreview />
          </>
        }
      />
    </main>
  )
}
