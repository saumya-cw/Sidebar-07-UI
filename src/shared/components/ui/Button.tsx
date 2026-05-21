import { Slot } from '@radix-ui/react-slot'
import * as React from 'react'
import { cn } from '../../lib/cn'

type ButtonVariant = 'default' | 'outline' | 'ghost'
type ButtonSize = 'default' | 'sm' | 'icon'

type ButtonProps = React.ComponentProps<'button'> & {
  asChild?: boolean
  variant?: ButtonVariant
  size?: ButtonSize
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild = false, size = 'default', variant = 'default', ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    const variantClassName =
      variant === 'outline'
        ? 'border border-[hsl(var(--border))] bg-[hsl(var(--card))] text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
        : variant === 'ghost'
          ? 'bg-transparent text-[hsl(var(--foreground))] hover:bg-[hsl(var(--muted))]'
          : 'bg-[hsl(var(--brand-primary))] text-[hsl(var(--brand-primary-foreground))] hover:opacity-90'
    const sizeClassName =
      size === 'sm'
        ? 'h-8 rounded-md px-3 text-xs'
        : size === 'icon'
          ? 'size-9 rounded-md'
          : 'h-9 rounded-md px-3.5 text-sm'

    return (
      <Comp
        ref={ref}
        className={cn(
          'inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap font-medium outline-none transition-colors',
          'focus-visible:outline-none focus-visible:bg-[hsl(var(--muted))]',
          'disabled:pointer-events-none disabled:opacity-50',
          variantClassName,
          sizeClassName,
          className,
        )}
        {...props}
      />
    )
  },
)

Button.displayName = 'Button'
