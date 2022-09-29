function romanToInt(s: string): number {
	const definitions: { [key: string]: number } = {
		"I": 1,
		"V": 5,
		"X": 10,
		"L": 50,
		"C": 100,
		"D": 500,
		"M": 1000,
	}

	let result = 0;
	let last = "";

	[...s].forEach((c) => {
		let val: number = definitions[c];
		if (last === "I" && (c === "V" || c === "X")) {
			val -= 2;
		} else if (last === "X" && (c === "L" || c === "C")) {
			val -= 20;
		} else if (last === "C" && (c === "D" || c === "M")) {
			val -= 200;
		}
		last = c;
		result += val;
	});

	return result;
}

console.log(romanToInt("MCMXCIV"));
