import styled, { keyframes } from "styled-components";

const AppearAnimation = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`;

export const StyledNav = styled.nav<{ isOpen: boolean }>`
	display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 2rem;
	width: 100%;
	height: 100vh;
	background-color: white;
	position: absolute;
	left: 0;
	top: 0;
	animation: 0.3s ease-in-out 1 forwards ${AppearAnimation};

	@media (min-width: 768px) {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 400px;
		border-right: 3px solid black;
		animation: none;
		transition: transform 0.3s ease-in-out;
		transform: translateX(${({ isOpen }) => (isOpen ? "0" : "-100%")});
	}
`;

export const StyledToggleButton = styled.button<{ isOpen: boolean }>`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	z-index: 9999;
	position: absolute;
	top: 20px;
	left: 20px;
	overflow: hidden;
	background-color: white;
	border: 3px solid black;
	cursor: pointer;

	@media (min-width: 720px) {
		left: 0;
		width: 60px;
		height: 60px;
		border-left: none;
		transition: transform 0.3s ease-in-out;
		transform: translateX(${({ isOpen }) => (isOpen ? "400px" : "0")});
	}
`;
