import { useState } from "react";

export const useLocalStorage = <T>(key: string, defaultValue: T) => {
	const [value, setValue] = useState<T>(() => {
		const storedValue = localStorage.getItem(key);
		return storedValue ? (storedValue as T) : defaultValue;
	});

	const saveToLocalStorage = (newValue: T) => {
		const newValueString = typeof newValue === "string" ? newValue : JSON.stringify(newValue);
		localStorage.setItem(key, newValueString);
		setValue(newValue);
	};

	return { value, saveToLocalStorage };
};
