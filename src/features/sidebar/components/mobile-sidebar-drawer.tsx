import type { ReactNode } from 'react'
import { useEffect } from 'react'
import { cn } from '../../../shared/lib'

export function MobileSidebarDrawer({
  isOpen,
  onOpenChange,
  children,
}: {
  isOpen: boolean
  onOpenChange: (isOpen: boolean) => void
  children: ReactNode
}) {
  useEffect(() => {
    if (!isOpen) return
    const onEsc = (event: KeyboardEvent) => event.key === 'Escape' && onOpenChange(false)
    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onEsc)
    return () => {
      document.body.style.overflow = ''
      window.removeEventListener('keydown', onEsc)
    }
  }, [isOpen, onOpenChange])

  return (
    <section
      aria-hidden={!isOpen}
      className={cn(
        'fixed inset-0 z-40 lg:hidden',
        isOpen ? 'pointer-events-auto' : 'pointer-events-none',
      )}
    >
      <button
        type="button"
        aria-label="Close sidebar menu"
        className={cn(
          'absolute inset-0 bg-zinc-950/45 transition-opacity',
          isOpen ? 'opacity-100' : 'opacity-0',
        )}
        onClick={() => onOpenChange(false)}
      />
      <aside
        role="dialog"
        aria-modal="true"
        aria-label="Sidebar menu"
        className={cn(
          'absolute left-0 top-0 h-full w-[85vw] max-w-[320px] border-r border-zinc-200 bg-zinc-50 shadow-xl transition-transform duration-200',
          isOpen ? 'translate-x-0' : '-translate-x-full',
        )}
      >
        <section className="h-full">{children}</section>
      </aside>
    </section>
  )
}
