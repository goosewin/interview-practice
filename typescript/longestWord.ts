function LongestWord(sen: string) {
  return sen
    .replace(/[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]/g, '')
    .replace('/ {2,}/', ' ')
    .split(' ')
    .reduce((longest, currentWord) => currentWord.length > longest.length ? currentWord : longest);
}
console.log(`'${LongestWord("a confusing /:sentence:/[ this is not!!!!!!!~")}'`);
