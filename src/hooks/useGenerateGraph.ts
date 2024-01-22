import { useAtom } from "jotai";
import { generateRandomArray } from "../utils/generateRandomArray";
import { graphSizeAtom } from "../components/store/GraphSizeAtom";
import { dataArrayAtom } from "../components/store/DataArrayAtom";
import { useEffect } from "react";

export const useGenerateButton = () => {
	const [, setData] = useAtom(dataArrayAtom);
	const [value] = useAtom(graphSizeAtom);

	const handleGenerate = () => {
		const newData = generateRandomArray(value);
		setData(newData);
	};

	useEffect(() => {
		handleGenerate();
	}, []);

	return { handleGenerate };
};
