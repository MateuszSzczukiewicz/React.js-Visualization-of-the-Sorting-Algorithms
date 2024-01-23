import type { AnimationStepType } from "../types/animationStep.type.ts";
import gsap from "gsap";
import { RefObject } from "react";

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
		const { index, newHeight } = animations[animationIndex];

		gsap.to(bars[index], {
			backgroundColor: "red",
			height: `${newHeight! * 3}px`,
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
	}

	await new Promise((resolve) => setTimeout(resolve, 200));
};

const merge = async (
	arr: number[],
	left: number,
	mid: number,
	right: number,
	animations: AnimationStepType[],
	graphRef: RefObject<HTMLDivElement>,
) => {
	const leftArray = arr.slice(left, mid + 1);
	const rightArray = arr.slice(mid + 1, right + 1);

	let i = 0;
	let j = 0;
	let k = left;

	while (i < leftArray.length && j < rightArray.length) {
		animations.push({ index: k, newHeight: leftArray[i] });
		if (leftArray[i] <= rightArray[j]) {
			arr[k++] = leftArray[i++];
		} else {
			arr[k++] = rightArray[j++];
		}
		await animateBars(graphRef, [{ index: k - 1, newHeight: arr[k - 1] }]);
	}

	while (i < leftArray.length) {
		animations.push({ index: k, newHeight: leftArray[i] });
		arr[k++] = leftArray[i++];
		await animateBars(graphRef, [{ index: k - 1, newHeight: arr[k - 1] }]);
	}

	while (j < rightArray.length) {
		animations.push({ index: k, newHeight: rightArray[j] });
		arr[k++] = rightArray[j++];
		await animateBars(graphRef, [{ index: k - 1, newHeight: arr[k - 1] }]);
	}
};

export const mergeSort = async (
	arr: number[],
	left: number,
	right: number,
	animations: AnimationStepType[],
	graphRef: RefObject<HTMLDivElement>,
) => {
	if (left < right) {
		const mid = Math.floor((left + right) / 2);

		await mergeSort(arr, left, mid, animations, graphRef);
		await mergeSort(arr, mid + 1, right, animations, graphRef);

		await merge(arr, left, mid, right, animations, graphRef);
	}
};
