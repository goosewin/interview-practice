function diagonalDifference(arr: number[][]): number {
  let sum1 = 0, sum2 = 0;

  for (let i = 0, j = arr.length - 1; i < arr.length; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][j];
    j--;
  }

  return sum2;
}

diagonalDifference([
  [11, 2, 4],
  [4, 5, 6],
  [10, 8, -12],
]);
