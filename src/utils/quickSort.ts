import gsap from "gsap";
import { RefObject } from "react";
import { AnimationStepType } from "../types/animationStep.type.ts";
import { AnimationStepEnum } from "../types/animationStep.enum.ts";

const animateBars = async (
	graphRef: RefObject<HTMLDivElement>,
	animations: AnimationStepType[],
) => {
	const bars = graphRef.current?.getElementsByClassName("bar");
	if (!bars) {
		console.error("Bars element not found");
		return;
	}

	for (let animationIndex = 0; animationIndex < animations.length; animationIndex++) {
		const { index, newHeight, type } = animations[animationIndex];

		switch (type) {
			case AnimationStepEnum.comparison:
				gsap.to(bars[index], {
					backgroundColor: "red",
					duration: 0.2,
					onComplete: () => {
						requestAnimationFrame(() => {
							gsap.to(bars[index], {
								backgroundColor: "blue",
								duration: 0.2,
							});
						});
					},
				});
				break;

			case AnimationStepEnum.heightChange:
				gsap.to(bars[index], {
					height: `${newHeight! * 3}px`,
					duration: 0.5,
					ease: "power1.inOut",
					onComplete: () => {
						requestAnimationFrame(() => {
							gsap.to(bars[index], {
								backgroundColor: "blue",
								duration: 0.2,
							});
						});
					},
				});
				break;

			case AnimationStepEnum.pivot:
				gsap.to(bars[index], {
					backgroundColor: "green",
					duration: 0.2,
					onComplete: () => {
						requestAnimationFrame(() => {
							gsap.to(bars[index], {
								backgroundColor: "blue",
								duration: 0.2,
							});
						});
					},
				});
				break;

			case AnimationStepEnum.partition:
				gsap.to(bars[index], {
					backgroundColor: "purple",
					duration: 0.2,
					onComplete: () => {
						requestAnimationFrame(() => {
							gsap.to(bars[index], {
								backgroundColor: "blue",
								duration: 0.2,
							});
						});
					},
				});
				break;

			default:
				break;
		}

		await new Promise((resolve) => setTimeout(resolve, 200));
	}
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

	await animateBars(graphRef, animations);
};

const partition = async (
	arr: number[],
	low: number,
	high: number,
	graphRef: RefObject<HTMLDivElement>,
	animations: AnimationStepType[],
): Promise<number> => {
	const pivot = arr[high];
	animations.push({ index: high, newHeight: pivot, type: AnimationStepEnum.pivot });

	let i = low - 1;

	for (let j = low; j < high; j++) {
		animations.push({ index: j, newHeight: arr[j], type: AnimationStepEnum.comparison });

		if (arr[j] <= pivot) {
			i++;
			await swap(arr, i, j, graphRef, animations);
		}
	}

	await swap(arr, i + 1, high, graphRef, animations);

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
