import React from "react";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { HeaderStyled } from "./Header.styled";
import { SearchBox } from "../SearchBox/SearchBox";

export default function Header() {
	return (
		<HeaderStyled>
			<div>
				<IconButton aria-label="add">
					<AddIcon />
				</IconButton>
				<IconButton aria-label="delete">
					<DeleteIcon />
				</IconButton>
				<IconButton aria-label="edit">
					<EditNoteIcon />
				</IconButton>
			</div>
			<SearchBox />
		</HeaderStyled>
	);
}
