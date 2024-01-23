import { useAtom } from "jotai";
import { generateRandomArray } from "../utils/generateRandomArray";
import { graphSizeAtom } from "../store/GraphSizeAtom";
import { dataArrayAtom } from "../store/DataArrayAtom";
import { useEffect } from "react";

export const useGenerateGraph = () => {
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
