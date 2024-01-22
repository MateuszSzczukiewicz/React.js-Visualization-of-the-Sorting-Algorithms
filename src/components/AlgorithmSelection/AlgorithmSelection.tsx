import { InputsWrapper, StyledInputs, StyledInputTitle } from "./AlgorithmSelection.styles.ts";

export const AlgorithmSelection = () => {
	return (
		<InputsWrapper>
			<StyledInputTitle>Select Your Algorithm Method</StyledInputTitle>
			<StyledInputs className="algorithm-selection">
				<>
					<input type="radio" id="quickSort" name="algorithm" />
					<label htmlFor="quickSort">QuickSort</label>
				</>
				<>
					<input type="radio" id="mergeSort" name="algorithm" />
					<label htmlFor="mergeSort">MergeSort</label>
				</>
			</StyledInputs>
		</InputsWrapper>
	);
};
