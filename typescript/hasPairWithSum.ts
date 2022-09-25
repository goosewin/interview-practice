function hasPairWithSum(arr: number[], sum: number) {
    const comp = new Set<number>();

    for (const item of arr) {
        if (comp.has(item)) return true;
        comp.add(sum - item);
    }
    return false;
}

console.log(hasPairWithSum([1, 2, 3, 4, 9], 8));
console.log(hasPairWithSum([1, 2, 3, 4, 4], 8));
