function checkOddOrEven(number) {
	if (typeof number !== "number") {
		return "Invalid input. Please provide a number.";
	}

	if (number % 2 === 0) {
		return "Even";
	} else {
		return "Odd";
	}
}

console.log(checkOddOrEven(3));
console.log(checkOddOrEven(8));
console.log(checkOddOrEven("IBA"));
