// Given a paragraph and a list of banned words, return the
// most frequent word that is not in the list of banned words

function mostCommonWord(paragraph: string, bannedWords: string[]): string {
  let ans = '';
  const seen: { [k: string]: number } = {};
  const sanitizedString = paragraph.replace(/[.,/\\!?]/g, '').toLowerCase().trim();

  for (const word of sanitizedString.split(' ')) {
    if (bannedWords.includes(word)) continue;
    if (!(word in seen)) {
      seen[word] = 0;
    }
    seen[word]++;
  }

  let max = 0;
  for (const [word, count] of Object.entries(seen)) {
    if (count > max) {
      max = count;
      ans = word;
    }
  }

  return ans;
}

console.log(mostCommonWord('Bob hit a ball, the hit BALL flew far after it was hit.', ['hit']));
