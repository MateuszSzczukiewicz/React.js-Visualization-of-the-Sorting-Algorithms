import { atomWithStorage } from "jotai/utils";
import { LocalStorageKeyEnum } from "../types/localStorageKey.enum.ts";
import { getInitialAlgorithmMethod } from "../utils/getInitialAlgorithmMethod.ts";

export const algorithmMethodAtom = atomWithStorage<string>(
	LocalStorageKeyEnum.selectedAlgorithm,
	getInitialAlgorithmMethod(),
);
