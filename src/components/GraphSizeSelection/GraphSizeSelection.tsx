import { InputsWrapper, StyledInputTitle } from "../AlgorithmSelection/AlgorithmSelection.styles";
import { StyledInput } from "./GraphSizeSelection.styles.ts";

export const GraphSizeSelection = () => {
	return (
		<InputsWrapper>
			<StyledInputTitle>Select Your Graph Size</StyledInputTitle>
			<StyledInput type="number" min="2" defaultValue="20" id="graphSize" name="size" />
		</InputsWrapper>
	);
};
