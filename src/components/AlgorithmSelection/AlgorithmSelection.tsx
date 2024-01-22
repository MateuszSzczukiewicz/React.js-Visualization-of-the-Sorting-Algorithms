import { InputsWrapper, StyledInputs, StyledInputTitle } from "./AlgorithmSelection.styles.ts";
import { SelectedAlgorithmEnum } from "../../types/selectedAlgorithm.enum.ts";
import { useAlgorithmSelection } from "../../hooks/useAlgorithmSelection.ts";

export const AlgorithmSelection = () => {
	const { value, handleAlgorithmChange } = useAlgorithmSelection();

	return (
		<InputsWrapper>
			<StyledInputTitle>Select Your Algorithm Method</StyledInputTitle>
			<StyledInputs className="algorithm-selection">
				<>
					<input
						type="radio"
						id="quickSort"
						name="algorithm"
						checked={value === SelectedAlgorithmEnum.quickSort}
						onChange={handleAlgorithmChange}
					/>
					<label htmlFor="quickSort">QuickSort</label>
				</>
				<>
					<input
						type="radio"
						id="mergeSort"
						name="algorithm"
						checked={value === SelectedAlgorithmEnum.mergeSort}
						onChange={handleAlgorithmChange}
					/>
					<label htmlFor="mergeSort">MergeSort</label>
				</>
			</StyledInputs>
		</InputsWrapper>
	);
};
