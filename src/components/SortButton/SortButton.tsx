import { StyledButton } from "../Buttons/Buttons.styles.ts";
import { useAtom } from "jotai";
import { dataArrayAtom } from "../store/DataArrayAtom.ts";

export const SortButton = () => {
	const [data, setData] = useAtom(dataArrayAtom);

	const handleSort = () => {
		const sortedArray = [...data].sort((a, b) => a - b);
		setData(sortedArray);
	};

	return <StyledButton onClick={handleSort}>Sort</StyledButton>;
};
