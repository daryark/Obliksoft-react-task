import styled from "@emotion/styled";

export const AppStyled = styled.div`
	display: grid;
	grid-template-areas:
		"header header"
		"sidebar main";
	grid-template-rows: 60px calc(100vh - 60px);
`;
