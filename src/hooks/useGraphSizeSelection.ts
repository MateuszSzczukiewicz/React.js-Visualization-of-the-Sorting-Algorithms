import { LocalStorageKeyEnum } from "../types/localStorageKey.enum.ts";
import { useLocalStorage } from "./useLocalStorage.ts";
import { ChangeEvent } from "react";

export const useGraphSizeSelection = () => {
	const key = LocalStorageKeyEnum.graphSize;
	const defaultGraphSize: number = 20;

	const { value, saveToLocalStorage } = useLocalStorage(key, defaultGraphSize);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(e.target.value);
		const validatedValue = inputValue >= 2 ? inputValue : 2;
		saveToLocalStorage(validatedValue);
	};
	return { value, handleInputChange };
};
