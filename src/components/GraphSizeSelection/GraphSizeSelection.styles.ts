import styled from "styled-components";

export const StyledInput = styled.input`
	padding: 10px;
	font-size: 1rem;
	width: 10rem;
	border: 2px solid #ccc;
	outline: none;

	&:focus {
		border-color: black;
	}

	@media (min-width: 768px) {
		font-size: 1.3rem;
	}
`;
