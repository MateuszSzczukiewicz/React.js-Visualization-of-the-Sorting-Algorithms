import { InputsWrapper, StyledInputTitle } from "../AlgorithmSelection/AlgorithmSelection.styles";
import { StyledInput } from "./GraphSizeSelection.styles.ts";
import { useGraphSizeSelection } from "../../hooks/useGraphSizeSelection.ts";

export const GraphSizeSelection = () => {
	const { value, handleInputChange } = useGraphSizeSelection();

	return (
		<InputsWrapper>
			<StyledInputTitle>Select Your Graph Size</StyledInputTitle>
			<StyledInput
				type="number"
				aria-label="Graph Size"
				min="2"
				max="50"
				id="graphSize"
				name="size"
				value={value}
				onChange={handleInputChange}
			/>
		</InputsWrapper>
	);
};
