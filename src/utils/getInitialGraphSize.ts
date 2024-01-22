import { LocalStorageKeyEnum } from "../types/localStorageKey.enum.ts";

export const getInitialGraphSize = (): number => {
	const storedValue = localStorage.getItem(LocalStorageKeyEnum.graphSize);
	if (storedValue) {
		try {
			const parsedValue = JSON.parse(storedValue);
			if (typeof parsedValue === "number") {
				return parsedValue;
			}
		} catch (error) {
			console.error("Error parsing value from localStorage:", error);
		}
	}
	return 20;
};
