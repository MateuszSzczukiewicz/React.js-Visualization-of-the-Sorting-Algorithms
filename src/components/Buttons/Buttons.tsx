import { ButtonsWrapper } from "./Buttons.styles.ts";
import { GenerateButton } from "../GenerateButton/GenerateButton.tsx";
import { SortButton } from "../SortButton/SortButton.tsx";

export const Buttons = () => {
	return (
		<ButtonsWrapper>
			<GenerateButton />
			<SortButton />
		</ButtonsWrapper>
	);
};
