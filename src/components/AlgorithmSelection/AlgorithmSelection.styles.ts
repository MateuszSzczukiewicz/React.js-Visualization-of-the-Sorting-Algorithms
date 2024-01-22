import styled from "styled-components";

export const InputsWrapper = styled.aside`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
`;

export const StyledInputTitle = styled.h2`
	font-family: Lato, sans-serif;
	font-size: 18px;
	font-weight: bold;
	text-align: center;
`;

export const StyledInputs = styled.article`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 8px;
	height: 5rem;
	width: 10rem;
	border: 2px solid black;
	font-family: Lato, sans-serif;

	input[type="radio"] {
		display: none;
	}

	label {
		cursor: pointer;
		user-select: none;
		padding: 8px;
		border-radius: 4px;
	}

	input[type="radio"]:checked + label {
		font-weight: bold;
	}
`;
