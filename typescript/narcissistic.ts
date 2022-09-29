function narcissistic(value: number): boolean {
  return value === value
    .toString()
    .split('')
    .reduce((acc, val, _, arr) => acc + Number(val) ** arr.length, 0);
}
