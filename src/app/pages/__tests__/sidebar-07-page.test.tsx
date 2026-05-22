import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Sidebar07Page } from "../sidebar-07-page";

function renderComponent() {
	return render(<Sidebar07Page />);
}

describe("Sidebar07Page", () => {
	it("opens and closes the mobile sidebar drawer", async () => {
		const user = userEvent.setup();
		renderComponent();

		expect(
			screen.queryByRole("dialog", { name: "Sidebar menu" }),
		).not.toBeInTheDocument();

		const hiddenSidebarDialog = screen.getByRole("dialog", {
			hidden: true,
			name: "Sidebar menu",
		});

		expect(hiddenSidebarDialog).toBeInTheDocument();

		await user.click(screen.getByRole("button", { name: "Open sidebar" }));

		expect(screen.getByRole("dialog", { name: "Sidebar menu" })).toBeVisible();

		await user.click(
			screen.getByRole("button", { name: "Close sidebar menu" }),
		);

		expect(
			screen.queryByRole("dialog", { name: "Sidebar menu" }),
		).not.toBeInTheDocument();
	});

	it("collapses the desktop sidebar to icon-only navigation", async () => {
		const user = userEvent.setup();
		renderComponent();
		const desktopSidebar = screen.getByRole("complementary", {
			name: "Desktop sidebar",
		});

		expect(within(desktopSidebar).getByText("Projects")).toBeVisible();

		await user.click(screen.getByRole("button", { name: "Toggle sidebar" }));

		expect(
			within(desktopSidebar).queryByText("Projects"),
		).not.toBeInTheDocument();
		expect(
			within(desktopSidebar).getByRole("button", { name: "Playground" }),
		).toBeVisible();
	});
});
