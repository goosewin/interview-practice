// Given a grid of robot positions, indicate if it is
// a valud time series for the number of robots specifies
// if robots can only travel up to 1 index further than their
// position 1 step above

// [[1,0,0,1],[0,1,1,0]], 2 -> true
// [[1,0,0,0,1],[1,0,1,0,0]], 2 -> false

function validMoveTimeSeries(input: number[][], numRobots: number): boolean {
  for (let i = 0; i < input.length; i++) {
    let robotsCounter = 0;
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] == 1) {
        robotsCounter++;

        if (i > 0 && j > 0 && input[i - 1][j - 1] == input[i][j]) input[i - 1][j - 1] = 0;
        else if (i > 0 && input[i - 1][j] == input[i][j]) input[i - 1][j] = 0;
        else if (i > 0 && j < input[i].length - 1 && input[i - 1][j + 1] == input[i][j]) input[i - 1][j + 1] = 0;
        else if (i > 0) return false;
      }
    }
    if (robotsCounter != numRobots) return false;
  }

  return true;
}

console.log(validMoveTimeSeries([[1, 0, 0, 1], [0, 1, 1, 0]], 2));
console.log(validMoveTimeSeries([[1, 0, 0, 0, 1], [1, 0, 1, 0, 0]], 2));
