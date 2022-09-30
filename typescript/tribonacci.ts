function tribonacci(n: number): number {
  if (n < 3) {
    return n === 0 ? 0 : 1;
  }

  let [n1, n2, n3] = [0, 1, 1];
  for (let i = 3; i < n + 1; i++) {
    const tmp = n1 + n2 + n3;
    [n1, n2, n3] = [n2, n3, tmp];
  }

  return n3;
}
