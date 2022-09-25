function containsCommonItem(array1: string[], array2: string[]): boolean {
	const map = new Set<string>();
	array1?.forEach((item) => {
		if (!map.has(item)) map.add(item);
	});

	for (const item of array2) {
		if (map.has(item)) return true;
	}
	return false;
}

console.log(containsCommonItem(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));
