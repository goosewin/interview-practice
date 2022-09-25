function pivotIndex(nums: number[]): number {
    let right = nums.reduce((sum, current) => sum + current, 0);
    let left = 0;

    for (let i = 0; i < nums.length; i++) {
        right -= nums[i];
        if (left === right) {
            return i;
        }
        left += nums[i];
    }

    return -1;
}

console.log(pivotIndex([2, 3, 6, 6, 5, 6]));
