import type { SidebarPanelMode } from "../context";
import { SidebarPanelModeProvider } from "../context";
import { PrimaryMenu } from "./primary-menu";
import { ProjectsMenu } from "./projects-menu";
import { UserInfo } from "./user-info";
import { WorkspaceInfo } from "./workspace-info";

export function SidebarPanel({
	mode = "desktop",
}: {
	mode?: SidebarPanelMode;
}) {
	return (
		<SidebarPanelModeProvider mode={mode}>
			<section className="flex h-full min-h-0 flex-col overflow-hidden bg-sidebar">
				<section className="shrink-0">
					<WorkspaceInfo />
				</section>
				<section className="min-h-0 flex-1 overflow-y-auto">
					<PrimaryMenu />
					<ProjectsMenu />
				</section>
				<section className="shrink-0">
					<UserInfo />
				</section>
			</section>
		</SidebarPanelModeProvider>
	);
}
