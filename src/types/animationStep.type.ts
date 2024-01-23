import { AnimationStepEnum } from "./animationStep.enum.ts";

export type AnimationStepType = {
	index: number;
	newHeight?: number;
	type?: AnimationStepEnum;
};
