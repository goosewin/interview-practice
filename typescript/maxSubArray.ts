function maxSubArray(nums: number[]): number {
  let localMax = 0;
  let globalMax = Number.MIN_SAFE_INTEGER;

  for (let i = 0; i < nums.length; i++) {
    localMax = Math.max(nums[i], nums[i] + localMax);
    if (localMax > globalMax) {
      globalMax = localMax;
    }
  }

  return globalMax;
}
