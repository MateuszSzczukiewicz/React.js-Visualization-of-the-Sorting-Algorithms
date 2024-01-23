import styled from "styled-components";

export const StyledHeader = styled.header`
	font-family: Lato, sans-serif;
	font-size: 1rem;
	width: 200px;

	@media (min-width: 768px) {
		font-size: 2rem;
		width: auto;
	}
`;

export const VariableSpan = styled.span`
	font-weight: bold;
`;

export const StyledGraph = styled.article`
	display: flex;
	align-items: end;
	gap: 2px;
	height: 150px;
	width: 370px;
`;

export const StyledBar = styled.div`
	display: flex;
	justify-content: center;
	background-color: blue;
	width: 100%;
`;

export const ButtonsWrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledButton = styled.button<{ isSorting: boolean }>`
	font-family: Lato, sans-serif;
	display: inline-block;
	padding: 10px 20px;
	font-size: 1rem;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: ${({ isSorting }) => (isSorting ? "" : "pointer")};
	border: ${({ isSorting }) => (isSorting ? "2px solid #bbb" : "2px solid black")};
	border-radius: 5px;
	color: ${({ isSorting }) => (isSorting ? "white" : "black")};
	background-color: ${({ isSorting }) => (isSorting ? "#bbb" : "white")};
	transition:
		background-color 0.3s,
		color 0.3s,
		border-color 0.3s;

	@media (min-width: 768px) {
		font-size: 1.5rem;
	}

	&:hover {
		color: white;
		background-color: ${({ isSorting }) => (isSorting ? "#bbb" : "#444")};
		border: ${({ isSorting }) => (isSorting ? "2px solid #bbb" : "")};
	}
`;
