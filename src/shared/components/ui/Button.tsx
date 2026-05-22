import { Slot } from "@radix-ui/react-slot";
import * as React from "react";
import { cn } from "../../lib/cn";

type ButtonVariant = "default" | "outline" | "ghost";
type ButtonSize = "default" | "sm" | "icon";

type ButtonProps = React.ComponentProps<"button"> & {
	asChild?: boolean;
	variant?: ButtonVariant;
	size?: ButtonSize;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{
			className,
			asChild = false,
			size = "default",
			variant = "default",
			...props
		},
		ref,
	) => {
		const Comp = asChild ? Slot : "button";
		const variantClassName =
			variant === "outline"
				? "border border-border bg-card text-foreground hover:bg-muted"
				: variant === "ghost"
					? "bg-transparent text-foreground hover:bg-muted"
					: "bg-primary text-primary-foreground hover:opacity-90";
		const sizeClassName =
			size === "sm"
				? "h-8 rounded-md px-3 text-xs"
				: size === "icon"
					? "size-9 rounded-md"
					: "h-9 rounded-md px-3.5 text-sm";

		return (
			<Comp
				className={cn(
					"inline-flex cursor-pointer select-none items-center justify-center gap-2 whitespace-nowrap font-medium outline-none transition-colors",
					"focus-visible:bg-muted focus-visible:outline-none",
					"disabled:pointer-events-none disabled:opacity-50",
					variantClassName,
					sizeClassName,
					className,
				)}
				ref={ref}
				{...props}
			/>
		);
	},
);

Button.displayName = "Button";
