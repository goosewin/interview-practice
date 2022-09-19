function findDuplicate(array: number[]): number | undefined {
  const seen = new Set<number>();
  let result: number | undefined = undefined;

  array.some((item) => {
    if (seen.has(item)) {
      result = item;
      return true;
    }
    seen.add(item);
  });

  return result;
}

console.log(findDuplicate([2, 5, 1, 2, 3, 5, 1, 2, 4]));
