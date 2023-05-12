import { TextField } from "@mui/material";
import styled from "@emotion/styled";

// export const SearchBoxStyled = styled.input`
// 	background-color: greenyellow;
// 	width: 150px;
// `;

export const TextFieldStyled = styled(TextField)`
	& label {
		transform: translate(14px, 10px) scale(1);
	}
	& div input {
		padding: 10px 14px;
		padding-right: 0;
	}
`;
