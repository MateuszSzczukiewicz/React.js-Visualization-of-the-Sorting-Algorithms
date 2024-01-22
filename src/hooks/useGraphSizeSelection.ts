import { useAtom } from "jotai/index";
import { graphSizeAtom } from "../components/store/GraphSizeAtom.ts";
import { ChangeEvent } from "react";

export const useGraphSizeSelection = () => {
	const [value, setValue] = useAtom(graphSizeAtom);

	const minGraphSize: number = 2;
	const maxGraphSize: number = 50;

	const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
		const inputValue = Number(e.target.value);
		const validatedValue = Math.min(Math.max(inputValue, minGraphSize), maxGraphSize);
		setValue(validatedValue);
	};

	return { value, handleInputChange };
};
