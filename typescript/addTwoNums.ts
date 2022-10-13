// @ts-ignore
class ListNode {
	val: number
	next: ListNode | null
	constructor(val?: number, next?: ListNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.next = (next === undefined ? null : next)
	}
}


function addTwoNumbers(l1: ListNode | null, l2: ListNode | null): ListNode | null {
	const list = new ListNode(0);
	let currentNode = list;

	let sum = 0;
	let carry = 0;

	while (l1 !== null || l2 !== null || sum > 0) {
		if (l1 !== null) {
			sum += l1.val;
			l1 = l1.next;
		}

		if (l2 !== null) {
			sum += l2.val;
			l2 = l2.next;
		}

		carry = Math.floor(sum / 10);
		sum = sum % 10;

		currentNode.next = new ListNode(sum);
		currentNode = currentNode.next;

		sum = carry;
		carry = 0;
	}

	return list.next;
}

const l1 = new ListNode(4, new ListNode(8, new ListNode(1)));
const l2 = new ListNode(3, new ListNode(4, new ListNode(6)));

console.log(addTwoNumbers(l1, l2));
