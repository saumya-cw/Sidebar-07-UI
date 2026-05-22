import * as Dialog from "@radix-ui/react-dialog";
import type { ReactNode } from "react";
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
	return (
		<Dialog.Root onOpenChange={onOpenChange} open={isOpen}>
			<Dialog.Portal>
				<Dialog.Overlay
					className={cn(
						"fixed inset-0 z-40 bg-primary/45 transition-opacity lg:hidden",
						isOpen ? "opacity-100" : "opacity-0",
					)}
				/>
				<Dialog.Content
					aria-label="Sidebar menu"
					className={cn(
						"fixed top-0 left-0 z-50 h-dvh w-11/12 max-w-103 border-sidebar-border border-r bg-sidebar shadow-xl transition-transform duration-200 lg:hidden",
						isOpen ? "translate-x-0" : "-translate-x-full",
					)}
				>
					<Dialog.Title className="sr-only">Sidebar menu</Dialog.Title>
					<section className="h-full">{children}</section>
				</Dialog.Content>
			</Dialog.Portal>
		</Dialog.Root>
	);
}
