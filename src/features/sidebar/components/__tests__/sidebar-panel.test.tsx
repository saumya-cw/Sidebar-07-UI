import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { SidebarProvider } from "../../context";
import { SidebarPanel } from "../sidebar-panel";

function renderComponent(mode: "desktop" | "mobile" = "desktop") {
	return render(
		<SidebarProvider>
			<SidebarPanel mode={mode} />
		</SidebarProvider>,
	);
}

describe("SidebarPanel", () => {
	it("renders the primary navigation with the active group expanded", () => {
		renderComponent();
		const primaryNavigation = screen.getByRole("navigation", {
			name: "Primary",
		});

		expect(
			within(primaryNavigation).getByRole("button", { name: "Playground" }),
		).toBeVisible();
		expect(
			within(primaryNavigation).getByRole("button", { name: "History" }),
		).toBeVisible();
		expect(
			within(primaryNavigation).getByRole("button", { name: "Starred" }),
		).toBeVisible();
		expect(
			within(primaryNavigation).getAllByRole("button", { name: "Settings" }),
		).toHaveLength(2);
	});

	it("toggles a collapsible primary navigation group", async () => {
		const user = userEvent.setup();
		renderComponent();

		await user.click(screen.getByRole("button", { name: "Models" }));

		expect(screen.getByRole("button", { name: "Genesis" })).toBeVisible();
		expect(screen.getByRole("button", { name: "Explorer" })).toBeVisible();
		expect(screen.getByRole("button", { name: "Quantum" })).toBeVisible();
	});

	it("moves focus through primary navigation with arrow keys", async () => {
		const user = userEvent.setup();
		renderComponent();
		const playgroundButton = screen.getByRole("button", { name: "Playground" });

		playgroundButton.focus();
		await user.keyboard("{ArrowDown}");

		expect(screen.getByRole("button", { name: "History" })).toHaveFocus();
	});

	it("opens project actions from the three-dot action button", async () => {
		const user = userEvent.setup();
		renderComponent();

		await user.click(
			screen.getByRole("button", { name: "Design Engineering actions" }),
		);

		expect(
			screen.getByRole("menuitem", { name: /view project/i }),
		).toBeVisible();
		expect(
			screen.getByRole("menuitem", { name: /share project/i }),
		).toBeVisible();
		expect(
			screen.getByRole("menuitem", { name: /delete project/i }),
		).toBeVisible();
	});

	it("keeps More as static text, not a menu item", () => {
		renderComponent();

		const projectsNavigation = screen.getByRole("navigation", {
			name: "Projects navigation",
		});

		expect(within(projectsNavigation).getByText("More")).toBeVisible();
		expect(
			within(projectsNavigation).queryByRole("button", { name: "More" }),
		).not.toBeInTheDocument();
	});

	it("opens workspace options from the workspace trigger", async () => {
		const user = userEvent.setup();
		renderComponent();

		await user.click(
			screen.getByRole("button", { name: "Open workspace options" }),
		);

		expect(screen.getByText("Workspaces")).toBeVisible();
		expect(screen.getByRole("menuitem", { name: /acme inc/i })).toBeVisible();
		expect(
			screen.getByRole("menuitem", { name: /add workspace/i }),
		).toBeVisible();
	});

	it("opens user options from the user trigger", async () => {
		const user = userEvent.setup();
		renderComponent();

		await user.click(screen.getByRole("button", { name: "Open user options" }));

		expect(
			screen.getByRole("menuitem", { name: /upgrade to pro/i }),
		).toBeVisible();
		expect(screen.getByRole("menuitem", { name: /account/i })).toBeVisible();
		expect(screen.getByRole("menuitem", { name: /log out/i })).toBeVisible();
	});
});
