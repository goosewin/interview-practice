interface IQueue<T> {
  enqueue(item: T): void;
  dequeue(): T | undefined;
  size(): number;
  print(): void;
  printFront(): void;
}

class Queue<T> implements IQueue<T> {
  private items: T[] = [];

  constructor(private capacity: number = Infinity) { }

  enqueue(item: T): void {
    if (this.size() === this.capacity) {
      throw Error("Queue has reached max capacity, you cannot add more items");
    }
    this.items.push(item);
  }
  dequeue(): T | undefined {
    return this.items.shift();
  }
  size(): number {
    return this.items.length;
  }
  print(): void {
    console.log(this.items);
  }
  printFront(): void {
    console.log(this.items[0]);
  }
}

const queue = new Queue<number>();

queue.enqueue(2);
queue.enqueue(5);

queue.print();
console.log(queue.dequeue());
queue.print();
