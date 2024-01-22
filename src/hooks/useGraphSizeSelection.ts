import { LocalStorageKeyEnum } from "../types/localStorageKey.enum.ts";
import { useLocalStorage } from "./useLocalStorage.ts";
import { ChangeEvent } from "react";
import { useAtom } from "jotai";
import { graphSizeAtom } from "../components/store/GraphSizeAtom.ts";

export const useGraphSizeSelection = () => {
	const key = LocalStorageKeyEnum.graphSize;
	const defaultGraphSize: number = 20;
	const minGraphSize: number = 2;
	const maxGraphSize: number = 50;

	const { value, saveToLocalStorage } = useLocalStorage(key, defaultGraphSize);
	const [, setValue] = useAtom(graphSizeAtom);

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(e.target.value);
		const validatedValue = Math.min(Math.max(inputValue, minGraphSize), maxGraphSize);
		saveToLocalStorage(validatedValue);
		setValue(validatedValue);
	};
	return { value, handleInputChange };
};
