interface IStackQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  peek(): void;
}

class StackQueue<T> implements IStackQueue<T> {
  private s1: T[] = [];
  private s2: T[] = [];

  enqueue(item: T) {
    if (!item) return;
    this.s1.push(item);
  }

  dequeue(): T | undefined {
    this.moveItems();
    return this.s2.pop();
  }

  peek(): T | null {
    this.moveItems();
    return this.s2[this.s2.length - 1] || null;
  }

  private moveItems() {
    if (this.s2.length === 0)
      while (this.s1.length > 0)
        this.s2.push(this.s1.pop()!);
  }
}
