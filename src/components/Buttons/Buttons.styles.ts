import styled from "styled-components";

export const ButtonsWrapper = styled.article`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
`;

export const StyledButton = styled.button`
	font-family: Lato, sans-serif;
	display: inline-block;
	padding: 10px 20px;
	font-size: 16px;
	font-weight: bold;
	text-align: center;
	text-decoration: none;
	cursor: pointer;
	border: 2px solid black;
	border-radius: 5px;
	color: black;
	background-color: white;
	transition:
		background-color 0.3s,
		color 0.3s,
		border-color 0.3s;

	&:hover {
		color: white;
		background-color: #444;
		border-color: white;
	}
`;
