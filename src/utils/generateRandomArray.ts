export const generateRandomArray = (length: number) => {
	const numbers: number[] = [];

	for (let i = 0; i < length; i++) {
		const randomNumber = Math.floor(Math.random() * 50) + 1;
		numbers.push(randomNumber);
	}

	return numbers;
};
