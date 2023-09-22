function printStringProperties(obj) {
	for (var key in obj) {
		if (typeof obj[key] === "string") {
			console.log(key + ": " + obj[key]);
		}
	}
}

// Example usage:
var person = {
	name: "Bilawal",
	age: 23,
	address: "Sukkur IBA University",
	email: "bilawalhameed@gmail.com",
};

printStringProperties(person);
