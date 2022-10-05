function solution(msg, K) {
  if (msg.length < K) return msg;
  
  let words = msg.split(' ');
  let i = 1;

  while (words.slice(0, i).join(' ').length <= K) i++;
  return words.slice(0, i - 1).join(' ');
}
