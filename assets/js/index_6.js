const calculateGrade = (marksArray) => {
	if (!Array.isArray(marksArray)) {
		return "Invalid input. Please provide an array of marks.";
	}

	const sum = marksArray.reduce((total, mark) => total + mark, 0);
	const average = sum / marksArray.length;

	let grade = "";

	if (average >= 90) {
		grade = "A+";
	} else if (average >= 80) {
		grade = "A";
	} else if (average >= 75) {
		grade = "B";
	} else if (average >= 70) {
		grade = "C";
	} else if (average >= 60) {
		grade = "D";
	} else {
		grade = "F";
	}

	return `Sum of marks: ${sum}, Average: ${average.toFixed(
		2
	)}, Grade: ${grade}`;
};

const marks = [85, 92, 78, 94, 88];
console.log(calculateGrade(marks));
