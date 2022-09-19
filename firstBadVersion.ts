/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

const solution = (isBadVersion: (n: number) => boolean) => (n: number) => {
    let low = 1;
    let high = n;
    while (low <= high) {
        const mid = low + (((high - low) / 2) | 2);
        if (isBadVersion(mid)) {
            if (mid - 1 >= 1 && isBadVersion(mid - 1)) {
                high = mid - 1;
            } else {
                return mid;
            }
        } else {
            low = mid + 1;
        }
    }
    return -1;
}
