import { StyledBar, StyledGraph } from "./Graph.styles.ts";
import { useAtom } from "jotai";
import { dataArrayAtom } from "../store/DataArrayAtom.ts";

export const Graph = () => {
	const [data] = useAtom(dataArrayAtom);

	return (
		<div>
			<StyledGraph>
				{data.map((value, index) => (
					<StyledBar
						key={index}
						style={{
							height: `${value * 3}px`,
						}}
					></StyledBar>
				))}
			</StyledGraph>
		</div>
	);
};
