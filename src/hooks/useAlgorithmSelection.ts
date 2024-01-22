import { useLocalStorage } from "./useLocalStorage.ts";
import { ChangeEvent } from "react";
import { LocalStorageKeyEnum } from "../types/localStorageKey.enum.ts";
import { SelectedAlgorithmEnum } from "../types/selectedAlgorithm.enum.ts";

export const useAlgorithmSelection = () => {
	const key = LocalStorageKeyEnum.selectedAlgorithm;
	const defaultAlgorithm: string = SelectedAlgorithmEnum.quickSort;

	const { value, saveToLocalStorage } = useLocalStorage(key, defaultAlgorithm);

	const handleAlgorithmChange = (e: ChangeEvent<HTMLInputElement>) => {
		const algorithmValue = e.target.id;
		saveToLocalStorage(algorithmValue);
	};
	return { value, handleAlgorithmChange };
};
