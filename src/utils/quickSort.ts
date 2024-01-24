import gsap from "gsap";
import { RefObject } from "react";
import type { AnimationStepType } from "../types/animationStep.type.ts";
import { AnimationStepEnum } from "../types/animationStep.enum.ts";

const animateBars = (graphRef: RefObject<HTMLDivElement>, animations: AnimationStepType[]) => {
	const bars = graphRef.current?.getElementsByClassName("bar");
	if (!bars) {
		console.error("Bars element not found");
		return;
	}

	const timeline = gsap.timeline();

	animations.forEach(({ index, newHeight, type }) => {
		switch (type) {
			case AnimationStepEnum.comparison:
				timeline.to(bars[index], {
					backgroundColor: "red",
				});
				break;

			case AnimationStepEnum.heightChange:
				timeline.to(bars[index], {
					height: `${newHeight! * 3}px`,
					backgroundColor: "blue",
					ease: "power1.inOut",
				});
				break;

			case AnimationStepEnum.pivot:
				timeline.to(bars[index], {
					backgroundColor: "green",
				});
				break;

			case AnimationStepEnum.partition:
				timeline.to(bars[index], {
					backgroundColor: "purple",
				});
				break;

			default:
				break;
		}
	});

	timeline.to(bars, {
		backgroundColor: "blue",
	});
};

const swap = async (
	arr: number[],
	i: number,
	j: number,
	graphRef: RefObject<HTMLDivElement>,
	animations: AnimationStepType[],
) => {
	const temp = arr[i];
	arr[i] = arr[j];
	arr[j] = temp;

	animations.push({ index: i, newHeight: arr[i], type: AnimationStepEnum.heightChange });
	animations.push({ index: j, newHeight: arr[j], type: AnimationStepEnum.heightChange });

	animateBars(graphRef, animations);
};

const partition = async (
	arr: number[],
	low: number,
	high: number,
	graphRef: RefObject<HTMLDivElement>,
	animations: AnimationStepType[],
): Promise<number> => {
	const pivot = arr[high];
	const pivotIndex = high;
	animations.push({ index: pivotIndex, newHeight: pivot, type: AnimationStepEnum.pivot });

	let i = low - 1;

	for (let j = low; j < high; j++) {
		animations.push({ index: j, newHeight: arr[j], type: AnimationStepEnum.comparison });

		if (arr[j] <= pivot) {
			i++;
			await swap(arr, i, j, graphRef, animations);
		}
	}

	await swap(arr, i + 1, pivotIndex, graphRef, animations);

	for (let k = low; k <= high; k++) {
		if (k < i + 1 || k > i + 1) {
			animations.push({ index: k, newHeight: arr[k], type: AnimationStepEnum.partition });
		}
	}

	return i + 1;
};

export const quickSort = async (
	arr: number[],
	low: number,
	high: number,
	animations: AnimationStepType[],
	graphRef: RefObject<HTMLDivElement>,
): Promise<void> => {
	if (low < high) {
		const partitionIndex = await partition(arr, low, high, graphRef, animations);

		await quickSort(arr, low, partitionIndex - 1, animations, graphRef);
		await quickSort(arr, partitionIndex + 1, high, animations, graphRef);
	}
};
