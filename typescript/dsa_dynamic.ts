let hash = {};

function fibonacci(n: number): number {
  if (n < 2) return n;

  if (!(n in hash)) hash[n] = fibonacci(n - 1) + fibonacci(n - 2);
  return hash[n];
}

console.log(fibonacci(30));
console.log(hash);
