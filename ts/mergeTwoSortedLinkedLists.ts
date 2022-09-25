let inputLines: string[] = [
  '1',
  '3',
  '1',
  '2',
  '3',
  '2',
  '3',
  '4',
];

main();

interface ListNode {
  value: number
  next?: ListNode
}

function mergeLists(headA: ListNode | undefined | null, headB: ListNode | undefined | null) {
  // console.log(JSON.stringify(headA), JSON.stringify(headB));

  if (!headA) {
    return headB;
  } else if (!headB) {
    return headA;
  }

  let mergedHead: ListNode | undefined | null = null;
  if (headA.value <= headB.value) {
    mergedHead = headA;
    headA = headA.next;
  } else {
    mergedHead = headB;
    headB = headB.next;
  }

  let mergedTail = mergedHead;

  while (headA && headB) {
    let tmp: ListNode | undefined | null = null;

    if (headA.value <= headB.value) {
      tmp = headA;
      headA = headA.next;
    } else {
      tmp = headB;
      headB = headB.next;
    }

    mergedTail.next = tmp;
    mergedTail = tmp;
  }

  if (headA) mergedTail.next = headA;
  else if (headB) mergedTail.next = headB;

  return mergedHead;
}

function printList(list: ListNode | undefined | null) {
  let result: number[] = [];

  let tmp = list;

  while (tmp) {
    result.push(tmp.value);
    tmp = tmp.next;
  }

  console.log(result.join(' '));
}

function main() {
  // const t = Number(inputLines[0]);
  let i = 1;

  while (i < inputLines.length) {
    let headA: ListNode | null = null;
    let headB: ListNode | null = null;

    const n = Number(inputLines[i]);
    i++;
    if (n != 0) {
      const l1e = i + n;
      headA = {} as ListNode;
      let tailA = headA;

      while (i < l1e) {
        const val = { value: Number(inputLines[i]) } as ListNode;
        if (headA === null) {
          headA = val;
          tailA = headA;
        }
        tailA.next = val;
        tailA = tailA.next;
        i++;
      }
      headA = headA.next as any;
    }

    const m = Number(inputLines[i]);
    i++;
    if (m != 0) {
      const l2e = i + m;
      headB = {} as ListNode;
      let tailB = headB;

      while (i < l2e) {
        const val = { value: Number(inputLines[i]) } as ListNode;
        if (headB === null) {
          headB = val;
          tailB = headB;
        }
        tailB.next = val;
        tailB = tailB.next;
        i++;
      }
      headB = headB.next as any;
    }

    const mergedList = mergeLists(headA, headB);
    printList(mergedList);
  }
}
