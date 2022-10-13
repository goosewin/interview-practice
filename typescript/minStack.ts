interface IMinStack {
  push(element: number): void
  pop(): void
  peek(): number | undefined
  getMin(): number | undefined
}

class MinStack implements IMinStack {
  private stack: number[] = [];
  private min: number[] = [];

  push(element: number) {
    if (this.min.length == 0) this.min.push(element);
    else this.min.push(Math.min(element, this.min[this.min.length - 1]));

    this.stack.push(element);
  }

  pop() {
    this.min.pop();
    this.stack.pop();
  }

  peek() {
    return this.stack[this.stack.length - 1];
  }

  getMin() {
    return this.min[this.min.length - 1];
  }
}

const minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
console.log(minStack.getMin());
minStack.pop();
console.log(minStack.peek());
console.log(minStack.getMin());
