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

	const animationPromises = animations.map(({ index, newHeight }) => {
		return new Promise((resolve) => {
			gsap.to(bars[index], {
				backgroundColor: "red",
				height: `${newHeight! * 3}px`,
				onComplete: () => {
					requestAnimationFrame(() => {
						gsap.to(bars[index], {
							backgroundColor: "blue",
							onComplete: resolve,
						});
					});
				},
			});
		});
	});

	await Promise.all(animationPromises);
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

		const mergedArray: number[] = [];

		let i = left;
		let j = mid + 1;

		for (; i <= mid && j <= right; ) {
			animations.push({ index: i, newHeight: arr[i] });
			animations.push({ index: j, newHeight: arr[j] });

			if (arr[i] <= arr[j]) {
				mergedArray.push(arr[i++]);
			} else {
				mergedArray.push(arr[j++]);
			}

			await animateBars(graphRef, [
				{ index: i - 1, newHeight: arr[i - 1] },
				{ index: j - 1, newHeight: arr[j - 1] },
			]);
		}

		for (; i <= mid; ) {
			animations.push({ index: i, newHeight: arr[i] });
			mergedArray.push(arr[i++]);
			await animateBars(graphRef, [{ index: i - 1, newHeight: arr[i - 1] }]);
		}

		for (; j <= right; ) {
			animations.push({ index: j, newHeight: arr[j] });
			mergedArray.push(arr[j++]);
			await animateBars(graphRef, [{ index: j - 1, newHeight: arr[j - 1] }]);
		}

		for (let k = 0; k < mergedArray.length; k++) {
			arr[left + k] = mergedArray[k];
			animations.push({ index: left + k, newHeight: arr[left + k] });
			await animateBars(graphRef, [{ index: left + k, newHeight: arr[left + k] }]);
		}
	}
};
