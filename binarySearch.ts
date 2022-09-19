function search(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = (start + end) / 2 | 0;

        if (nums[mid] === target) {
            return mid;
        }

        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return -1;
}

function searchInsert(nums: number[], target: number): number {
    let start = 0;
    let end = nums.length - 1;

    while (start <= end) {
        const mid = (start + end) / 2 | 0;

        if (nums[mid] === target) {
            return mid;
        }

        if (target < nums[mid]) {
            end = mid - 1;
        } else {
            start = mid + 1;
        }
    }

    return start;
}

console.log(searchInsert([1, 3, 5, 6], 2));
