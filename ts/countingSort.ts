function countingSort(arr: number[]): number[] {
  const result = new Array(100).fill(0);

  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    result[num]++;
  }

  return result;
}

countingSort([1, 1, 3, 2, 1]);
