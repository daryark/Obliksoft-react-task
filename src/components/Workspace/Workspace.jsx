import React from "react";
import { Sidebar } from "../Sidebar/Sidebar";
import { WorkspaceStyled } from "./Workspace.styled";

function Workspace() {
	return (
		<>
			<Sidebar />
			<WorkspaceStyled>
				<>workspace main</>
			</WorkspaceStyled>
		</>
	);
}

export default Workspace;
