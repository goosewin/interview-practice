class ListNode {
	constructor(public value: number, public next?: ListNode | null) {
		this.value = value;
		this.next = next && null;
	}
}

class ArrayStack {
	private data: number[];
	top: number | null;
	bottom: number | null;
	length: number;

	constructor() {
		this.top = null;
		this.bottom = null;
		this.data = [];
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value: number) {
		this.data.push(value);
		if (!this.bottom) {
			this.bottom = value;
			this.top = value;
		} else {
			this.top = value;
		}
		this.length++;
		return value;
	}

	pop() {
		const popped = this.data.pop();
		if (this.length === 1) {
			this.top = null;
			this.bottom = null;
		} else {
			this.top = this.data[this.length];
		}
		this.length--;
		return popped;
	}

	isEmpty() {
		return this.length === 0;
	}
}

class LinkedListStack {
	top: ListNode | null;
	bottom: ListNode | null;
	length: number;

	constructor() {
		this.top = null;
		this.bottom = null;
		this.length = 0;
	}

	peek() {
		return this.top;
	}

	push(value: number) {
		const newNode = new ListNode(value);
		if (this.length === 0) {
			this.top = newNode;
			this.bottom = newNode;
		} else {
			const holdingPointer = this.top;
			this.top = newNode;
			this.top.next = holdingPointer;
		}
		this.length++;
		return this;
	}

	pop() {
		if (!this.top) {
			return null;
		}
		const holdingPointer = this.top;
		this.top = this.top.next ? this.top.next : null;
		this.length--;
		return holdingPointer;
	}

	isEmpty() {
		return this.length === 0;
	}
}

class Queue {
	first: ListNode | null;
	last: ListNode | null;
	length: number;

	constructor() {
		this.first = null;
		this.last = null;
		this.length = 0;
	}

	peek() {
		return this.first;
	}

	enqueue(value: number) {
		const newNode = new ListNode(value);
		if (this.length === 0) {
			this.last = newNode;
			this.first = newNode;
		} else {
			this.last!.next = newNode;
			this.last = this.last!.next;
		}
		this.length++;
		return this.last;
	}

	dequeue() {
		const holdingPointer = this.first;
		this.first = this?.first?.next ? this.first.next : null;
		this.length--;
		return holdingPointer;
	}
}

class Stack {
	private data: number[];

	constructor() {
		this.data = [];
	}

	peek() {
		return this.data[this.data.length - 1];
	}

	push(value: number) {
		this.data.push(value);
		return value;
	}

	pop() {
		const popped = this.data.pop();
		return popped;
	}

	empty() {
		return this.data.length === 0;
	}
}

class StackQueue {
	private data: number[] = [];

	push(x: number): void {
		this.data.push(x);
	}

	pop(): number | null {
		if (this.data.length === 0) {
			return null;
		}
		return this.data.shift() as number;
	}

	peek(): number {
		return this.data[0];
	}

	empty(): boolean {
		return this.data.length == 0;
	}
}

const myQueue = new StackQueue();
console.log(myQueue.push(1));
console.log(myQueue.push(2));
console.log(myQueue.peek());
console.log(myQueue.pop());
console.log(myQueue.empty());

// const stack = new LinkedListStack();

// stack.push(1);
// console.log(stack.peek());
// stack.push(2);
// console.log(stack.peek());
// stack.push(3);
// console.log(stack.peek());

// console.log(stack.pop());
// console.log(stack.pop());
// console.log(stack.pop());

// const queue = new Queue();

// queue.enqueue(1);
// console.log(queue.peek());
// queue.enqueue(2);
// console.log(queue.peek());
// console.log(queue);
// queue.enqueue(3);
// console.log(queue);
// queue.dequeue();
// console.log(queue);
// queue.dequeue();
// console.log(queue.peek());
// console.log(queue);
// queue.dequeue();
// console.log(queue);
