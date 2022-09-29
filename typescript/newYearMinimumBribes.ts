function minimumBribes(q: number[]): void {
  q = q.map((val) => val - 1);
  let acc = 0;

  for (let i = 0; i < q.length; i++) {
    if (q[i] - i > 2) {
      console.log("Too chaotic");
      return;
    }
  }

  for (let i = q.length - 1 - 2; i >= 0; i--) {
    for (let j = i; j <= i + 2; j++) {
      if (q[j] > q[j + 1]) {
        [q[j], q[j + 1]] = [q[j + 1], q[j]];
        acc++;
      }
    }
  }
  console.log(acc);
}

minimumBribes([1, 2, 5, 3, 7, 8, 6, 4]);
minimumBribes([2, 5, 1, 3, 4]);
