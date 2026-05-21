import * as DropdownMenu from '@radix-ui/react-dropdown-menu'
import { cn } from '../../../../shared/lib'

export const MenuRoot = DropdownMenu.Root
export const MenuTrigger = DropdownMenu.Trigger
export const MenuPortal = DropdownMenu.Portal
export const MenuContent = DropdownMenu.Content
export const MenuLabel = DropdownMenu.Label
export const MenuItem = DropdownMenu.Item
export const MenuSeparator = DropdownMenu.Separator

export function MenuContentPanel({
  className,
  ...props
}: React.ComponentProps<typeof MenuContent>) {
  return (
    <MenuContent
      className={cn(
        'z-50 min-w-56 rounded-lg border border-zinc-200 bg-white p-1.5 shadow-sm',
        className,
      )}
      {...props}
    />
  )
}
export function MenuSectionLabel({ className, ...props }: React.ComponentProps<typeof MenuLabel>) {
  return <MenuLabel className={cn('px-2 py-1 text-xs text-zinc-500', className)} {...props} />
}
export function MenuActionItem({ className, ...props }: React.ComponentProps<typeof MenuItem>) {
  return (
    <MenuItem
      className={cn(
        'flex cursor-pointer items-center gap-2 rounded-md px-2 py-1.5 text-sm text-zinc-900 outline-none hover:bg-zinc-100 focus:bg-zinc-100 data-[highlighted]:bg-zinc-100',
        className,
      )}
      {...props}
    />
  )
}
export function MenuDivider({ className, ...props }: React.ComponentProps<typeof MenuSeparator>) {
  return <MenuSeparator className={cn('my-1 h-px bg-zinc-200', className)} {...props} />
}
