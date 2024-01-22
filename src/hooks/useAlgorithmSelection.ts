import { useAtom } from "jotai/index";
import { algorithmMethodAtom } from "../components/store/AlgorithmMethodAtom.ts";
import { ChangeEvent } from "react";

export const useAlgorithmSelection = () => {
	const [value, setValue] = useAtom(algorithmMethodAtom);

	const handleAlgorithmChange = (e: ChangeEvent<HTMLInputElement>) => {
		const algorithmValue = e.target.id;
		setValue(algorithmValue);
	};

	return { handleAlgorithmChange, value };
};
