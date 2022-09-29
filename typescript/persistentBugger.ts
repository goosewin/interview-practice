function multiplyDigits(num: number): number {
  let result = 1;

  [...num.toString()].forEach((digit) => {
    result *= Number(digit);
  })

  return result;
}

function persistence(num: number): number {
  let input = num;
  let length = input.toString().length;

  let counter = 0;

  while (length > 1) {
    input = multiplyDigits(input);
    length = input.toString().length;

    counter += 1;
  }

  return counter;
}
