import React from "react";

import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import EditNoteIcon from "@mui/icons-material/EditNote";
import { IconButton } from "@mui/material";

import { SearchBox } from "components/SearchBox/SearchBox";
import { Header } from "./Workspace.styled";

function Workspace() {
  return (
    <div>
      <Header>
        <IconButton aria-label="add">
          <AddIcon />
        </IconButton>
        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
        <IconButton aria-label="edit">
          <EditNoteIcon />
        </IconButton>
        <SearchBox />
      </Header>
    </div>
  );
}

export default Workspace;
