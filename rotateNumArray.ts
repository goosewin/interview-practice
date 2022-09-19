function rotate(nums: number[], k: number): void {
  k -= nums.length * Math.floor(k / nums.length);
  nums.push.apply(nums, nums.splice(0, nums.length - k));
}

const nums = [1, 2, 3, 4, 5, 6, 7];

rotate(nums, 3);
console.log(`${nums}`);
