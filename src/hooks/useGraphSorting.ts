import { useRef } from "react";
import { useAtom } from "jotai";
import { dataArrayAtom } from "../store/DataArrayAtom.ts";
import { mergeSort } from "../utils/mergeSort.ts";
import { algorithmMethodAtom } from "../store/AlgorithmMethodAtom.ts";
import { SelectedAlgorithmEnum } from "../types/selectedAlgorithm.enum.ts";
import { quickSort } from "../utils/quickSort.ts";

export const useGraphSorting = () => {
	const [method] = useAtom(algorithmMethodAtom);
	const [data] = useAtom(dataArrayAtom);
	const sortedArray = [...data];
	const graphRef = useRef<HTMLDivElement>(null);

	const handleSort = async () => {
		method === SelectedAlgorithmEnum.quickSort
			? await quickSort(sortedArray, 0, sortedArray.length - 1, [], graphRef)
			: await mergeSort(sortedArray, 0, sortedArray.length - 1, [], graphRef);
	};

	return {
		sortedArray,
		graphRef,
		handleSort,
	};
};
