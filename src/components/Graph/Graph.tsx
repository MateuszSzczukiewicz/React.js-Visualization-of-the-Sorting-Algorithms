import { forwardRef } from "react";
import { useGraphSorting } from "../../hooks/useGraphSorting";
import {
	ButtonsWrapper,
	StyledBar,
	StyledButton,
	StyledGraph,
	StyledHeader,
	VariableSpan,
} from "./Graph.styles.ts";
import { useGenerateGraph } from "../../hooks/useGenerateGraph.ts";
import { useAtom } from "jotai";
import { algorithmMethodAtom } from "../../store/AlgorithmMethodAtom.ts";
import { graphSizeAtom } from "../../store/GraphSizeAtom.ts";

export const Graph = forwardRef(() => {
	const { sortedArray, graphRef, isSorting, handleSort } = useGraphSorting();
	const { handleGenerate } = useGenerateGraph();
	const [method] = useAtom(algorithmMethodAtom);
	const [size] = useAtom(graphSizeAtom);

	return (
		<>
			<StyledHeader>
				You visualize the <VariableSpan>{method}</VariableSpan> algorithm to sort
				<VariableSpan> {size}</VariableSpan> items
			</StyledHeader>
			<StyledGraph ref={graphRef}>
				{sortedArray.map((value, index) => (
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
