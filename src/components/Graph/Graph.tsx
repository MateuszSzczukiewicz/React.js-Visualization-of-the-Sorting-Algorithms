import { useRef, forwardRef, useState } from "react";
import { useAtom } from "jotai";
import { dataArrayAtom } from "../store/DataArrayAtom.ts";
import { ButtonsWrapper, StyledBar, StyledButton, StyledGraph } from "./Graph.styles.ts";
import { mergeSort } from "../../utils/mergeSort.ts";
import { useGenerateGraph } from "../../hooks/useGenerateGraph.ts";
import { algorithmMethodAtom } from "../store/AlgorithmMethodAtom.ts";
import { SelectedAlgorithmEnum } from "../../types/selectedAlgorithm.enum.ts";

export const Graph = forwardRef(() => {
	const [data] = useAtom(dataArrayAtom);
	const [method] = useAtom(algorithmMethodAtom);
	const sortedArray = [...data];
	const graphRef = useRef<HTMLDivElement>(null);
	const [isSorting, setIsSorting] = useState(false);

	const { handleGenerate } = useGenerateGraph();

	const handleSort = async () => {
		setIsSorting(true);

		if (method === SelectedAlgorithmEnum.mergeSort) {
			await mergeSort(sortedArray, 0, sortedArray.length - 1, [], graphRef);
		}

		setIsSorting(false);
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
				<StyledButton
					onClick={handleGenerate}
					isSorting={isSorting}
					disabled={isSorting}
					aria-label="Generate New Array"
				>
					Generate New Array
				</StyledButton>
				<StyledButton
					onClick={handleSort}
					isSorting={isSorting}
					disabled={isSorting}
					aria-label="Sort"
				>
					Sort
				</StyledButton>
			</ButtonsWrapper>
		</>
	);
});
