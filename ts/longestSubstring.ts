function lengthOfLongestSubstring(s: string): number {
  let ans = 0, start = 0, i = 0;
  const set = new Set();

  while (i < s.length) {
    if (set.has(s[i])) set.delete(s[start++]);
    else {
      set.add(s[i++]);
      ans = Math.max(ans, set.size);
    }
  }

  return ans;
};

console.log(lengthOfLongestSubstring("abcabcabc"))
