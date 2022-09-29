function rob(nums: number[]): number {
  if (!nums || nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  if (nums.length == 2) return Math.max(nums[0], nums[1]);

  const hash: (number | null)[] = new Array(nums.length).fill(null);

  hash[0] = nums[0];
  hash[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < hash.length; i++) {
    const curr = nums[i] + hash[i - 2]!;
    const adj = hash[i - 1];

    hash[i] = Math.max(curr, adj!);
  }

  console.log(hash);

  return hash[nums.length - 1]!;
}

console.log(rob([2, 7, 9, 3, 1]));
