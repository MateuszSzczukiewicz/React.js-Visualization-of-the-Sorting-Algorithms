import { forwardRef } from "react";
import { useGraphSorting } from "../../hooks/useGraphSorting";
import { ButtonsWrapper, StyledBar, StyledButton, StyledGraph } from "./Graph.styles.ts";
import { useGenerateGraph } from "../../hooks/useGenerateGraph.ts";

export const Graph = forwardRef(() => {
	const { sortedArray, graphRef, isSorting, handleSort } = useGraphSorting();
	const { handleGenerate } = useGenerateGraph();

	return (
		<>
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
