import { atomWithStorage } from "jotai/utils";
import { getInitialGraphSize } from "../../utils/getInitialGraphSize.ts";
import { LocalStorageKeyEnum } from "../../types/localStorageKey.enum.ts";

export const graphSizeAtom = atomWithStorage<number>(
	LocalStorageKeyEnum.graphSize,
	getInitialGraphSize(),
);
