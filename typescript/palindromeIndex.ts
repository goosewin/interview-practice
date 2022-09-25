function isPalindrome(s: string): boolean {
  for (let i = 0, j = s.length - 1; j > i; i++, j--) {
    if (s[i] != s[j]) return false;
  }
  return true;
}

function palindromeIndex(s: string): number {
  const n = s.length;

  if (!isPalindrome(s)) {
    for (let i = 0; i < n; i++) {
      if (s.charAt(i) != s.charAt(n - 1 - i)) {
        let s1 = s.slice(0, i) + s.slice(i + 1);
        let s2 = s.slice(0, n - 1 - i) + s.slice(n - i);

        if (isPalindrome(s1)) {
          return i;
        } else if (isPalindrome(s2)) {
          return n - 1 - i;
        }

        break;
      }
    }
  }

  return -1;
}

console.log(palindromeIndex("madaam"));
