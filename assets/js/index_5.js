function checkSpeed(speed) {
	if (typeof speed !== "number" || isNaN(speed)) {
		return "Invalid input. Please provide a valid number for speed.";
	}

	if (speed <= 70) {
		return "Good Safe Driving";
	} else if (speed > 70 && speed <= 120) {
		const penaltyPoints = Math.floor((speed - 70) / 5);
		return `Speed Limit Crossed by Penalty Point ${penaltyPoints}`;
	} else {
		return "License Suspended";
	}
}

console.log(checkSpeed(30));
console.log(checkSpeed(75));
console.log(checkSpeed(130));
console.log(checkSpeed("Not a number"));
