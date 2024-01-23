import styled from "styled-components";

export const LegendWrapper = styled.aside`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	width: 15rem;
	height: 7rem;
	top: 1rem;
	right: 50vw;
	transform: translateX(50%);

	@media (min-width: 768px) {
		width: 26rem;
		height: 13rem;
		border: 3px solid black;
		right: 5rem;
		top: 5rem;
		transform: translateX(0%);
	}
`;

export const StyledList = styled.ul`
	font-family: Lato, sans-serif;
	font-weight: bold;
	list-style: none;
	display: flex;
	flex-direction: column;

	@media (min-width: 768px) {
		gap: 1rem;
		font-size: 1.5rem;
	}
`;

export const RedSpan = styled.span`
	color: red;
`;
export const BlueSpan = styled.span`
	color: blue;
`;
export const GreenSpan = styled.span`
	color: green;
`;
export const PurpleSpan = styled.span`
	color: purple;
`;
