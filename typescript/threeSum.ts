// Given an array of integers, return whether or not
// there are three numbers that add up to a given target

// O(n^2)
function threeSum(nums: number[], target: number): number[] {
  nums.sort((a, b) => a - b);

  let j = 0, k = 0;
  for (let i = 0; i < nums.length - 2; i++) {
    j = i + 1;
    k = nums.length - 1;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] == target) {
        return [nums[i], nums[j], nums[k]];
      }

      if (nums[i] + nums[j] + nums[k] < target) j++;
      else k--;
    }
  }

  return [-1];
}
