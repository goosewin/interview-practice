function FirstFactorial(num: number): number {
	if (num === 1) {
		return 1;
	}
	let result = num;
	while (num - 1 !== 1) {
		num--;
		result *= num;
	}
	return result;
}

console.log(FirstFactorial(4));
