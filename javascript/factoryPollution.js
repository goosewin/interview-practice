function solution(A) {
  let ans = 0;
  let pollution = A.reduce((a, b) => a + b);
  let goal = pollution / 2;

  while (goal < pollution) {
    ans++;
    A.sort((a, b) => b - a);
    A[0] /= 2;
    pollution = A.reduce((a, b) => a + b);
  }

  return ans;
}
