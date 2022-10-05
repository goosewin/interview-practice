function solution(P, S) {
  let total = P.reduce((a, b) => a + b);
  let ans = 0;
  S.sort((a, b) => b - a);

  for (const i of S) {
    if (total - i > 0) {
      total -= i;
      ans++;
    } else return ++ans;
  }
}
