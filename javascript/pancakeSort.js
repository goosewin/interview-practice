function flip(arr, k) {
  let left = 0;
  while (left < k) {
    const tmp = arr[left];
    arr[left] = arr[k];
    arr[k] = tmp;
    k--;
    left++;
  }
}

function findMaxIndex(arr, k) {
  let index = 0;

  for (let i = 0; i < k; i++) {
    if (arr[i] >= arr[index]) {
      index = i;
    }
  }
  
  return index;
}

function pancakeSort(arr) {
  let n = arr.length;
  
  while (n > 1) {
    const maxIndex = findMaxIndex(arr, n);
    flip(arr, maxIndex);
    flip(arr, n - 1);
    n--;
  }
  
  return arr;
}
