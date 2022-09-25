function sortedSquares(nums: number[]): number[] {
	nums.forEach((num, index) => { nums[index] = num ** 2 });

	return nums.sort((a, b) => a - b);
}

console.log(sortedSquares([4, 3, 7, 5]));
