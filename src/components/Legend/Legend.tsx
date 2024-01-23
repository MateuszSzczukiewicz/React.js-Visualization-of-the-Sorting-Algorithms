import {
	BlueSpan,
	LegendWrapper,
	PurpleSpan,
	RedSpan,
	StyledList,
	GreenSpan,
} from "./Legend.styles.ts";

export const Legend = () => {
	return (
		<LegendWrapper>
			<StyledList>
				<li>
					Comparison - <RedSpan>Red Bar</RedSpan>
				</li>
				<li>
					Height Change - <BlueSpan>Blue Bar</BlueSpan>
				</li>
				<li>
					Pivot - <GreenSpan>Green Bar</GreenSpan>
				</li>
				<li>
					Partition - <PurpleSpan>Purple Bar</PurpleSpan>
				</li>
			</StyledList>
		</LegendWrapper>
	);
};
