import { LocalStorageKeyEnum } from "../types/localStorageKey.enum";
import { SelectedAlgorithmEnum } from "../types/selectedAlgorithm.enum.ts";

export const getInitialAlgorithmMethod = (): string => {
	const storedValue = localStorage.getItem(LocalStorageKeyEnum.selectedAlgorithm);
	if (storedValue) {
		try {
			const parsedValue = JSON.parse(storedValue);
			if (typeof parsedValue === "string") {
				return parsedValue;
			}
		} catch (error) {
			console.error("Error parsing value from localStorage:", error);
		}
	}
	return SelectedAlgorithmEnum.quickSort;
};
