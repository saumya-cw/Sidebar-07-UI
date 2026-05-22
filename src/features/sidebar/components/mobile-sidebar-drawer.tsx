import type { ReactNode } from "react";
import { useEffect } from "react";
import { cn } from "../../../shared/lib";

export function MobileSidebarDrawer({
	isOpen,
	onOpenChange,
	children,
}: {
	isOpen: boolean;
	onOpenChange: (isOpen: boolean) => void;
	children: ReactNode;
}) {
	useEffect(() => {
		if (!isOpen) return;
		const onEsc = (event: KeyboardEvent) =>
			event.key === "Escape" && onOpenChange(false);
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", onEsc);
		return () => {
			document.body.style.overflow = "";
			window.removeEventListener("keydown", onEsc);
		};
	}, [isOpen, onOpenChange]);

	return (
		<section
			aria-hidden={!isOpen}
			className={cn(
				"fixed inset-0 z-40 lg:hidden",
				isOpen ? "pointer-events-auto" : "pointer-events-none",
			)}
		>
			<button
				aria-label="Close sidebar menu"
				className={cn(
					"absolute inset-0 bg-primary/45 transition-opacity",
					isOpen ? "opacity-100" : "opacity-0",
				)}
				onClick={() => onOpenChange(false)}
				type="button"
			/>
			<aside
				aria-label="Sidebar menu"
				aria-modal="true"
				className={cn(
					"absolute top-0 left-0 h-full w-[85vw] max-w-[25.75rem] border-sidebar-border border-r bg-sidebar shadow-xl transition-transform duration-200",
					isOpen ? "translate-x-0" : "-translate-x-full",
				)}
				role="dialog"
			>
				<section className="h-full">{children}</section>
			</aside>
		</section>
	);
}
