function getTotalImbalance(weights: number[]): number {
  let result = 0;

  for (let i = 0; i < weights.length - 1; i++) {
    for (let j = i + 1; j < weights.length; j++) {
      result += Math.abs(weights[i] - weights[j]);
    }
  }

  return result;
}

console.log(getTotalImbalance([4, 1, 3, 2]));
