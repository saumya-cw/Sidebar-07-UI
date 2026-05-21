import * as Tooltip from '@radix-ui/react-tooltip'
import type { ReactNode } from 'react'

export function SidebarTooltip({
  content,
  children,
  disabled = false,
}: {
  content: string
  children: ReactNode
  disabled?: boolean
}) {
  if (disabled) return children
  return (
    <Tooltip.Provider delayDuration={120}>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            side="right"
            sideOffset={8}
            className="z-50 rounded-md bg-zinc-950 px-3 py-1.5 text-sm font-medium text-white shadow-sm"
          >
            {content}
            <Tooltip.Arrow className="fill-zinc-950" width={8} height={4} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  )
}
