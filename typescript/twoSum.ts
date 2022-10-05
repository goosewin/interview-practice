// Given an array of integers, return the indices of
// the two numbers that add up to a given target.

function twoSum(nums: number[], target: number): number[] | null {
  const seen: { [k: number]: number } = {};

  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];

    if (diff in seen) return [seen[diff], i];
    seen[nums[i]] = i;
  }

  return null;
}

console.log(twoSum([1, 3, 7, 9, 2], 11));
