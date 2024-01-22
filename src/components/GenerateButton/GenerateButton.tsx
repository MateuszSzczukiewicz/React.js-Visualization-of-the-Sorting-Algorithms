import { StyledButton } from "../Buttons/Buttons.styles.ts";
import { useGenerateButton } from "../../hooks/useGenerateGraph.ts";

export const GenerateButton = () => {
	const { handleGenerate } = useGenerateButton();

	return <StyledButton onClick={handleGenerate}>Generate New Array</StyledButton>;
};
