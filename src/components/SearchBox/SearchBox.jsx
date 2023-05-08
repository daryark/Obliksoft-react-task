import React from "react";
import { InputAdornment, TextField } from "@mui/material";

import SearchIcon from "@mui/icons-material/Search";

export function SearchBox() {
  return (
    <TextField
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
