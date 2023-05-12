import React from "react";
import { InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { TextFieldStyled } from "./SearchBox.styled";

export function SearchBox() {
	return (
		<TextFieldStyled
			id="search"
			label="Search"
			InputProps={{
				endAdornment: (
					<InputAdornment position="end">
						<SearchIcon />
					</InputAdornment>
				),
			}}
			variant="outlined"
		/>
	);
}
