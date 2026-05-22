import type { ReactNode } from "react";
import { createContext, useContext } from "react";

export type SidebarPanelMode = "desktop" | "mobile";

const SidebarPanelModeContext = createContext<SidebarPanelMode>("desktop");

export function SidebarPanelModeProvider({
	children,
	mode,
}: {
	children: ReactNode;
	mode: SidebarPanelMode;
}): ReactNode {
	return (
		<SidebarPanelModeContext.Provider value={mode}>
			{children}
		</SidebarPanelModeContext.Provider>
	);
}

export function useSidebarPanelMode(): SidebarPanelMode {
	return useContext(SidebarPanelModeContext);
}
