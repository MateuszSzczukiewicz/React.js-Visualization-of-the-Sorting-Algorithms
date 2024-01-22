import { StyledButton } from "../Buttons/Buttons.styles.ts";
import { useGenerateGraph } from "../../hooks/useGenerateGraph.ts";

export const GenerateButton = () => {
	const { handleGenerate } = useGenerateGraph();

	return <StyledButton onClick={handleGenerate}>Generate New Array</StyledButton>;
};
