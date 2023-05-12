import React from "react";
import Header from "../Header/Header";
import Workspace from "../Workspace/Workspace";
import { AppStyled } from "./App.styled";

function App() {
	return (
		<AppStyled>
			<Header />
			<Workspace />
		</AppStyled>
	);
}

export default App;
