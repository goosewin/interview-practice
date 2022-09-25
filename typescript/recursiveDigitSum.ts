// function superDigit(n: string, k: number): number {
//   let acc = n.repeat(k);
//   while (acc.length != 1) {
//     acc = [...acc].reduce((p, c) => Number(p) + Number(c), 0).toString();
//   }
//   return Number(acc);
// }
const superDigit = (n: string, k: number) => 1 + (k * [...n].reduce((p, c) => Number(p) + Number(c), 0) - 1) % 9;

console.log(superDigit("12430985761246", 1000000));
