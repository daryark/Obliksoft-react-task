import React, { useContext } from "react";
import { SidebarStyled } from "./Sidebar.styled";
import { AppContext } from "../../context/AppContext";
import ListItemEl from "../ListItemEl/ListItemEl";

export function Sidebar() {
	const { name, isActive, handleItemClick } = useContext(AppContext);
	const list = [1, 2, 3];

	return (
		<SidebarStyled>
			Sidebar, my name: {name}
			<ul>
				{list.length > 0 &&
					list.map((item) => (
						<ListItemEl
							key={item}
							item={item}
							className={isActive ? "bg-yellow" : ""}
							onClick={handleItemClick}
						/>
					))}
			</ul>
		</SidebarStyled>
	);
}
