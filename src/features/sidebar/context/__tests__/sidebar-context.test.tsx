import { act, render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SidebarProvider, useSidebar } from "../sidebar-context";

const originalMatchMedia = window.matchMedia;

function SidebarStatePreview() {
	const {
		closeMobileSidebar,
		isDesktopCollapsed,
		isMobileSidebarOpen,
		openMobileSidebar,
		toggleDesktopSidebar,
	} = useSidebar();

	return (
		<section>
			<p>Desktop collapsed: {String(isDesktopCollapsed)}</p>
			<p>Mobile open: {String(isMobileSidebarOpen)}</p>
			<button onClick={toggleDesktopSidebar} type="button">
				Toggle desktop
			</button>
			<button onClick={openMobileSidebar} type="button">
				Open mobile
			</button>
			<button onClick={closeMobileSidebar} type="button">
				Close mobile
			</button>
		</section>
	);
}

function renderComponent() {
	return render(
		<SidebarProvider>
			<SidebarStatePreview />
		</SidebarProvider>,
	);
}

describe("SidebarProvider", () => {
	afterEach(() => {
		window.matchMedia = originalMatchMedia;
		vi.restoreAllMocks();
	});

	it("provides desktop collapse and mobile open state actions", async () => {
		const user = userEvent.setup();
		renderComponent();

		expect(screen.getByText("Desktop collapsed: false")).toBeVisible();
		expect(screen.getByText("Mobile open: false")).toBeVisible();

		await user.click(screen.getByRole("button", { name: "Toggle desktop" }));
		await user.click(screen.getByRole("button", { name: "Open mobile" }));

		expect(screen.getByText("Desktop collapsed: true")).toBeVisible();
		expect(screen.getByText("Mobile open: true")).toBeVisible();

		await user.click(screen.getByRole("button", { name: "Close mobile" }));

		expect(screen.getByText("Mobile open: false")).toBeVisible();
	});

	it("closes the mobile sidebar when the viewport becomes desktop sized", async () => {
		const user = userEvent.setup();
		const mediaQueryListeners: Array<() => void> = [];
		let isDesktopViewport = false;

		window.matchMedia = vi.fn().mockImplementation((query: string) => ({
			addEventListener: (_eventType: string, listener: () => void) => {
				mediaQueryListeners.push(listener);
			},
			addListener: vi.fn(),
			dispatchEvent: vi.fn(),
			get matches() {
				return isDesktopViewport;
			},
			media: query,
			onchange: null,
			removeEventListener: vi.fn(),
			removeListener: vi.fn(),
		}));

		renderComponent();

		await user.click(screen.getByRole("button", { name: "Open mobile" }));
		expect(screen.getByText("Mobile open: true")).toBeVisible();

		isDesktopViewport = true;
		await act(async () => {
			for (const listener of mediaQueryListeners) {
				listener();
			}
		});

		expect(screen.getByText("Mobile open: false")).toBeVisible();
	});

	it("throws when useSidebar is rendered outside SidebarProvider", () => {
		const consoleError = vi
			.spyOn(console, "error")
			.mockImplementation(() => {});

		expect(() => render(<SidebarStatePreview />)).toThrow(
			"useSidebar must be used within SidebarProvider",
		);

		consoleError.mockRestore();
	});
});
