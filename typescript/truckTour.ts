// returns smallest i
function truckTour(pumps: number[][]): number {
  let oldPetrol = 0;
  let result = -1;

  for (let i = 0; i < pumps.length; i++) {
    if (oldPetrol + pumps[i][0] > pumps[i][1]) {
      if (!oldPetrol) {
        result = i;
      }
      oldPetrol = oldPetrol + pumps[i][0] - pumps[i][1];
    } else {
      oldPetrol = 0;
    }
  }

  return result;
}

console.log(truckTour([
  [1, 5],
  [10, 3],
  [5, 7],
]));
