function maxProfit(prices: number[]): number {
  let min = prices[0];
  let max = 0;

  for (let i = 1; i < prices.length; i++) {
    min = Math.min(min, prices[i]);
    max = Math.max(max, prices[i] - min);
  }

  return max;
}

console.log(maxProfit([5, 1, 7, 6, 5, 4, 3]));
