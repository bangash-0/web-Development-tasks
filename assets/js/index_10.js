function replaceMinWithNegativeOne(numbers) {
	if (!Array.isArray(numbers) || numbers.length === 0) {
		return "Invalid input. Please provide a non-empty array of numbers.";
	}

	// Find the minimum value in the array
	const minValue = Math.min(...numbers);

	// Replace all occurrences of the minimum value with -1
	for (let i = 0; i < numbers.length; i++) {
		if (numbers[i] === minValue) {
			numbers[i] = -1;
		}
	}

	return numbers;
}

const numbersList = [4, 2, 1, 2, 3, 1, 4];
const result = replaceMinWithNegativeOne(numbersList);
console.log(result);
