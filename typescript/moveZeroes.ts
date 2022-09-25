function moveZeroes(nums: number[]): void {
  for (let i = nums.length; i >= 0; i--) {
    nums[i] === 0 && nums.splice(i, 1) && nums.push(0);
  }
}

const nums1 = [0, 1, 0, 3, 12];
moveZeroes(nums1);
console.log(nums1);

// Given an integer array nums, move all 0's to the end of it
// while maintaining the relative order of the non-zero elements.
// function moveZeroes(nums: number[]): void {
//     let zeroesCounter = 0;
//     const result: number[] = [];

//     nums.forEach((num) => num !== 0 ? result.push(num) : zeroesCounter++);

//     nums.splice(0, nums.length, ...result);
//     for (let i = 0; i < zeroesCounter; i++) {
//         nums.push(0)
//     }
// }

// const input = [0, 1, 2, 3, 5, 0, 6, 0, 9];
// moveZeroes(input);

// console.log(input);
