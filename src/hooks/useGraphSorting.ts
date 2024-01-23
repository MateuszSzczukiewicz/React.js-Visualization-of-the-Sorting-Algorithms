import { useRef, useState } from "react";
import { useAtom } from "jotai";
import { dataArrayAtom } from "../store/DataArrayAtom.ts";
import { mergeSort } from "../utils/mergeSort.ts";
import { algorithmMethodAtom } from "../store/AlgorithmMethodAtom.ts";
import { SelectedAlgorithmEnum } from "../types/selectedAlgorithm.enum.ts";
import { quickSort } from "../utils/quickSort.ts";

export const useGraphSorting = () => {
	const [data] = useAtom(dataArrayAtom);
	const [method] = useAtom(algorithmMethodAtom);
	const sortedArray = [...data];
	const graphRef = useRef<HTMLDivElement>(null);
	const [isSorting, setIsSorting] = useState(false);

	const handleSort = async () => {
		setIsSorting(true);

		method === SelectedAlgorithmEnum.quickSort
			? await quickSort(sortedArray, 0, sortedArray.length - 1, [], graphRef)
			: await mergeSort(sortedArray, 0, sortedArray.length - 1, [], graphRef);

		setIsSorting(false);
	};

	return {
		sortedArray,
		graphRef,
		isSorting,
		handleSort,
	};
};
