function getMaxAdditionalDinersCount(N, K, M, S) {
  // 1..N - seat numbers in a row
  // K - empty seats left and right from visitor
  // M - number of visitors seated
  // S - array of occupied visitor seats

  let seat = 1;
  let availableSeats = 0;

  S.sort((a, b) => a - b).concat(N + K + 1).forEach((diner) => {
    const delta = diner - K - seat;
    availableSeats += delta > 0 ? Math.ceil(delta / (K + 1)) : 0;
    seat = diner + K + 1;
  });

  return availableSeats;
}

console.log(getMaxAdditionalDinersCount(
  10,
  1,
  2,
  [2, 6],
));
