import React from "react";
import { ListItemStyled } from "./ListItem.styled";

export default function ListItemEl({ item }) {
	return <ListItemStyled>list item number {item}</ListItemStyled>;
}
