function elementsWithDigits(arr) {
	if (!Array.isArray(arr)) {
		return "Invalid input. Please provide an array.";
	}

	// Use filter to check if any element contains a digit
	const result = arr.filter((element) => {
		if (typeof element !== "string") {
			return false; // Skip non-string elements
		}
		return /\d/.test(element); // Check if the element contains a digit
	});

	return result;
}

const inputArray = ["apple123", "banana", "cherry", "12345", "grape99"];
const elementsWithDigitsArray = elementsWithDigits(inputArray);
console.log(elementsWithDigitsArray);
