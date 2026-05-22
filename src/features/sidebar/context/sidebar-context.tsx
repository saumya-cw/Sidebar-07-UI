import type { ReactNode } from "react";
import {
	createContext,
	useCallback,
	useContext,
	useEffect,
	useMemo,
	useState,
} from "react";

const DESKTOP_MEDIA_QUERY = "(min-width: 64rem)";

type SidebarContextValue = {
	closeMobileSidebar: () => void;
	isDesktopCollapsed: boolean;
	isMobileSidebarOpen: boolean;
	openMobileSidebar: () => void;
	toggleDesktopSidebar: () => void;
};

const SidebarContext = createContext<SidebarContextValue | null>(null);

export function SidebarProvider({
	children,
}: {
	children: ReactNode;
}): ReactNode {
	const [isDesktopCollapsed, setIsDesktopCollapsed] = useState(false);
	const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

	useEffect(() => {
		const desktopMediaQuery = window.matchMedia(DESKTOP_MEDIA_QUERY);

		function handleViewportChange(): void {
			if (desktopMediaQuery.matches) {
				setIsMobileSidebarOpen(false);
			}
		}

		handleViewportChange();
		desktopMediaQuery.addEventListener("change", handleViewportChange);

		return () =>
			desktopMediaQuery.removeEventListener("change", handleViewportChange);
	}, []);

	const closeMobileSidebar = useCallback(
		() => setIsMobileSidebarOpen(false),
		[],
	);
	const openMobileSidebar = useCallback(() => setIsMobileSidebarOpen(true), []);
	const toggleDesktopSidebar = useCallback(() => {
		setIsDesktopCollapsed((currentValue) => !currentValue);
	}, []);

	const sidebarContextValue = useMemo(
		() => ({
			closeMobileSidebar,
			isDesktopCollapsed,
			isMobileSidebarOpen,
			openMobileSidebar,
			toggleDesktopSidebar,
		}),
		[
			closeMobileSidebar,
			isDesktopCollapsed,
			isMobileSidebarOpen,
			openMobileSidebar,
			toggleDesktopSidebar,
		],
	);

	return (
		<SidebarContext.Provider value={sidebarContextValue}>
			{children}
		</SidebarContext.Provider>
	);
}

export function useSidebar(): SidebarContextValue {
	const sidebarContextValue = useContext(SidebarContext);

	if (!sidebarContextValue) {
		throw new Error("useSidebar must be used within SidebarProvider");
	}

	return sidebarContextValue;
}
