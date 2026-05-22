import { Button } from "../../../../shared/components/ui";
import { cn } from "../../../../shared/lib";

type SidebarRowButtonProps = React.ComponentProps<"button"> & {
	compact?: boolean;
};
const SIDEBAR_FOCUS_SELECTOR = '[data-sidebar-focusable="true"]';

export function SidebarSection({
	className,
	...props
}: React.ComponentProps<"section">) {
	return <section className={cn("px-2", className)} {...props} />;
}
export function SidebarSectionLabel({
	className,
	...props
}: React.ComponentProps<"header">) {
	return (
		<header
			className={cn(
				"px-2 pt-5 pb-2 font-medium text-muted-foreground text-xs tracking-wide",
				className,
			)}
			{...props}
		/>
	);
}
export function SidebarList({
	className,
	...props
}: React.ComponentProps<"ul">) {
	return (
		<ul
			className={cn("space-y-0.5", className)}
			onKeyDown={(event) => {
				const listElement = event.currentTarget;
				const focusableElements = Array.from(
					listElement.querySelectorAll<HTMLElement>(SIDEBAR_FOCUS_SELECTOR),
				).filter((element) => !element.hasAttribute("disabled"));

				if (focusableElements.length === 0) return;
				const activeIndex = focusableElements.indexOf(
					document.activeElement as HTMLElement,
				);

				const moveFocus = (nextIndex: number) => {
					focusableElements[nextIndex]?.focus();
					event.preventDefault();
				};

				if (event.key === "ArrowDown") {
					const nextIndex =
						activeIndex < 0 ? 0 : (activeIndex + 1) % focusableElements.length;
					moveFocus(nextIndex);
				}
				if (event.key === "ArrowUp") {
					const nextIndex =
						activeIndex < 0
							? focusableElements.length - 1
							: (activeIndex - 1 + focusableElements.length) %
								focusableElements.length;
					moveFocus(nextIndex);
				}
				if (event.key === "Home") {
					moveFocus(0);
				}
				if (event.key === "End") {
					moveFocus(focusableElements.length - 1);
				}
			}}
			{...props}
		/>
	);
}
export function SidebarListItem(props: React.ComponentProps<"li">) {
	return <li {...props} />;
}
export function SidebarRowButton({
	className,
	compact = false,
	...props
}: SidebarRowButtonProps) {
	return (
		<Button
			className={cn(
				"inline-flex w-full items-center justify-between rounded-md px-2 text-left font-normal text-sidebar-foreground text-sm hover:bg-sidebar-accent",
				compact ? "h-7" : "h-8",
				className,
			)}
			data-sidebar-focusable="true"
			size="default"
			tabIndex={props.disabled ? -1 : (props.tabIndex ?? 0)}
			variant="ghost"
			{...props}
		/>
	);
}
