import { useRef, forwardRef } from "react";
import { ButtonsWrapper, StyledButton } from "../Buttons/Buttons.styles.ts";
import { useAtom } from "jotai";
import { dataArrayAtom } from "../store/DataArrayAtom.ts";
import { StyledBar, StyledGraph } from "./Graph.styles.ts";
import { mergeSort } from "../../utils/mergeSort.ts";
import { useGenerateGraph } from "../../hooks/useGenerateGraph.ts";
import { algorithmMethodAtom } from "../store/AlgorithmMethodAtom.ts";
import { SelectedAlgorithmEnum } from "../../types/selectedAlgorithm.enum.ts";

export const Graph = forwardRef(() => {
	const [data] = useAtom(dataArrayAtom);
	const [method] = useAtom(algorithmMethodAtom);
	const sortedArray = [...data];
	const graphRef = useRef<HTMLDivElement>(null);

	const { handleGenerate } = useGenerateGraph();

	const handleSort = async () => {
		method === SelectedAlgorithmEnum.mergeSort
			? await mergeSort(sortedArray, 0, sortedArray.length - 1, [], graphRef)
			: null;
	};

	return (
		<>
			<StyledGraph ref={graphRef}>
				{data.map((value, index) => (
					<StyledBar
						key={index}
						className="bar"
						style={{
							height: `${value * 3}px`,
						}}
					></StyledBar>
				))}
			</StyledGraph>
			<ButtonsWrapper>
				<StyledButton onClick={handleGenerate}>Generate New Array</StyledButton>
				<StyledButton onClick={handleSort}>Sort</StyledButton>
			</ButtonsWrapper>
		</>
	);
});
