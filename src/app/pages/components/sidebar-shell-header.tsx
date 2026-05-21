import { PanelLeft } from 'lucide-react'
import { Button } from '../../../shared/components/ui'

type SidebarShellHeaderProps = {
  onOpenMobileSidebar: () => void
  onToggleDesktopSidebar: () => void
}

export function SidebarShellHeader({
  onOpenMobileSidebar,
  onToggleDesktopSidebar,
}: SidebarShellHeaderProps) {
  return (
    <>
      <header className="sticky top-0 z-10 flex h-14 items-center border-b border-zinc-200 bg-white px-4 lg:hidden">
        <Button
          aria-label="Open sidebar"
          onClick={onOpenMobileSidebar}
          variant="outline"
          size="default"
          className="inline-flex size-8 items-center justify-center p-0 text-zinc-600"
        >
          <PanelLeft className="size-4" />
        </Button>
      </header>
      <header className="hidden h-14 items-center bg-white px-4 lg:flex">
        <button
          type="button"
          onClick={onToggleDesktopSidebar}
          aria-label="Toggle sidebar"
          className="inline-flex size-8 items-center justify-center rounded-md text-zinc-600 hover:bg-zinc-100"
        >
          <PanelLeft className="size-4" />
        </button>
        <span aria-hidden="true" className="mx-3 h-5 w-px bg-zinc-200" />
        <nav aria-label="Breadcrumb" className="inline-flex items-center gap-2 text-sm">
          <span className="text-zinc-500">Build Your Application</span>
          <span className="text-zinc-400">{'>'}</span>
          <span className="font-medium text-zinc-900">Data Fetching</span>
        </nav>
      </header>
    </>
  )
}
