function displayObjectKeysAndValues(obj) {
	if (typeof obj !== "object" || obj === null) {
		return "Invalid input. Please provide a non-null object.";
	}

	const keys = Object.keys(obj);

	if (keys.length === 0) {
		return "The object is empty.";
	}

	keys.forEach((key) => {
		const value = obj[key];

		if (typeof value === "object" && value !== null) {
			console.log(`Key: ${key}`);
			displayObjectKeysAndValues(value); // Recursively display nested object's keys and values
		} else {
			console.log(`Key: ${key}, Value: ${value}`);
		}
	});
}

const obj = {
	name: "Bilawal",
	age: 23,
	address: {
		street: "Nisar Siddiqi Road",
		city: "Sukkur",
	},
};

displayObjectKeysAndValues(obj);
