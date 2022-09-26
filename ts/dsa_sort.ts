const sortTestInput = [5, 1, 4, 2, 3, 7, 6, 8];


function bubbleSort(arr: number[]): number[] {
  const ans = Array.from(arr);
  let sorted = false;

  while (!sorted) {
    sorted = true;
    for (let i = 0, j = 1; i < ans.length - 1; i++, j++) {
      if (ans[i] > ans[j]) {
        const tmp = ans[i];
        ans[i] = ans[j];
        ans[j] = tmp;
        sorted = false;
      }
    }
  }

  return ans;
}

console.log(bubbleSort(sortTestInput));


function selectionSort(arr: number[]): number[] {
  const ans = Array.from(arr);

  let currIndex = 0;
  while (currIndex < ans.length) {
    let smallestIndex = currIndex;

    // get the smallest number in array
    for (let i = currIndex; i < ans.length - 1; i++) {
      if (ans[smallestIndex] > ans[i + 1]) {
        smallestIndex = i + 1;
      }
    }

    // put the smallest number at beginning
    // of unsorted sequence by swapping
    let tmp = ans[currIndex];
    ans[currIndex] = ans[smallestIndex];
    ans[smallestIndex] = tmp;

    currIndex++;
  }

  return ans;
}

console.log(selectionSort(sortTestInput));


function insertionSort(arr: number[]): number[] {
  const ans = Array.from(arr);

  for (let i = 1; i < ans.length; i++) {
    let curr = ans[i];

    let j = i - 1;
    while ((j > -1) && (curr < ans[j])) {
      ans[j + 1] = ans[j];
      j--;
    }
    ans[j + 1] = curr;
  }

  return ans;
}

console.log(insertionSort(sortTestInput));


function mergeSort(arr: number[]): number[] {
  const ans = Array.from(arr);
  if (ans.length === 1) return ans;

  const mid = ans.length / 2 | 0;
  const left = ans.slice(0, mid);
  const right = ans.slice(mid);

  return merge(
    mergeSort(left),
    mergeSort(right),
  );
}

function merge(left: number[], right: number[]): number[] {
  const result: number[] = [];

  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift()!);
    } else {
      result.push(right.shift()!);
    }
  }

  return [...result, ...left, ...right];
}

console.log(mergeSort(sortTestInput));

function quickSort(arr: number[], left: number, right: number): number[] {
  if (left < right) {
    const pivot = right;
    const partitionIndex = partition(arr, pivot, left, right);

    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
  }
  return arr;
}

function partition(arr: number[], pivot: number, left: number, right: number): number {
  let pivotValue = arr[pivot];
  let partitionIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      swap(arr, i, partitionIndex);
      partitionIndex++;
    }
  }
  swap(arr, right, partitionIndex);
  return partitionIndex;
}

function swap(arr: number[], firstIndex: number, secondIndex: number): void {
  let tmp = arr[firstIndex];
  arr[firstIndex] = arr[secondIndex];
  arr[secondIndex] = tmp;
}

console.log(quickSort(Array.from(sortTestInput), 0, sortTestInput.length - 1));
