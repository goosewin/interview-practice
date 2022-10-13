function encode(input: string): string {
  if (input.length == 0) return '';
  let ans = '';

  let prevChar = '';
  let counter = 0;
  for (const char of input) {
    if (char != prevChar) {
      if (prevChar != '') ans += (counter + prevChar);
      counter = 1;
      prevChar = char;
    } else {
      counter++;
    }
  }

  return ans + (counter + prevChar);
}

function decode(input: string): string {
  let ans = '';

  let repeatCounter = 0;
  for (const char of input) {
    if (char.match("^[a-zA-Z]")) {
      if (repeatCounter != 0) ans += (char.repeat(repeatCounter));
      repeatCounter = 0;
    } else {
      repeatCounter = Number(char);
    }
  }

  return ans;
}

const encodeTest1 = 'aabccaaa';
console.log(encode(encodeTest1));

const decodeTest1 = '2a1b2c3a';
console.log(decode(decodeTest1));
