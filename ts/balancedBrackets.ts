const BRACKET_INDEX: { [key: string]: string } = {
  '(': ')',
  '{': '}',
  '[': ']',
};

const closingBrackets = new Set<string>(Object.keys(BRACKET_INDEX).map((e) => BRACKET_INDEX[e]));

function isBalanced(text: string): boolean {
  const open: string[] = [];
  for (const char of text) {
    if (closingBrackets.has(char)) {
      if (char === open[open.length - 1]) open.pop();
      else return false;
    }
    if (char in BRACKET_INDEX) open.push(BRACKET_INDEX[char]);
  }
  return open.length === 0;
}

console.log(isBalanced('()('));
