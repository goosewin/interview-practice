function countDecreasingRatings(ratings: number[]): number {
  if (ratings.length == 0) return 0;

  let groups = 0, start = 0, end = 1;

  while (end < ratings.length) {
    if (ratings[end - 1] - ratings[end] == 1) {
      groups += end - start;
    } else {
      start = end;
    }
    end++;
  }

  return groups + ratings.length;
}

console.log(countDecreasingRatings([4, 3, 5, 4, 3]));
