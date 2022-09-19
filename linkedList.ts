export interface SingleNode {
    value: any
    next: SingleNode | null
}

export interface DoubleNode {
    value: any
    next: DoubleNode | null
    prev: DoubleNode | null
}

export class SinglyLinkedList {
    public head: SingleNode;
    public tail: SingleNode;
    public length: number;

    constructor(value: any) {
        this.head = {
            value,
            next: null
        }
        this.tail = this.head;
        this.length = 1;
    }

    public append(value: any) {
        const newNode: SingleNode = {
            value,
            next: null
        }

        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this.printList();
    }

    public prepend(value: any) {
        const newNode: SingleNode = {
            value,
            next: null
        }

        newNode.next = this.head;
        this.head = newNode;
        this.length++;
        return this.printList();
    }

    private printList() {
        const array = [];
        let currentNode: SingleNode | null = this.head;
        while (currentNode !== null) {
            array.push(currentNode.value);
            currentNode = currentNode.next;
        }
        // console.log(array);
        return array;
    }

    private traverseToIndex(index: number) {
        let node: SingleNode = this.head;

        for (let i = 0; i < index; i++) {
            if (node?.next) {
                node = node.next;
            }
        }

        return node;
    }

    public insert(index: number, value: any) {
        const newNode: SingleNode = {
            value,
            next: null
        }

        if (index > this.length) {
            throw new Error('Insert index out of bounds');
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const leadingNode: SingleNode = this.traverseToIndex(index - 1);

        newNode.next = leadingNode.next;
        leadingNode.next = newNode;
        this.length++;
        return this.printList();
    }

    public remove(index: number) {
        if (index > this.length) {
            throw new Error('Insert index out of bounds');
        }

        if (index === 0 && this.length > 1) {
            if (this.head.next) {
                this.head = this.head.next;
            } else {
                throw new Error('Cannot remove last item from LinkedList instance');
            }
            return this.printList();
        }

        const leadingNode: SingleNode = this.traverseToIndex(index - 1);

        if (leadingNode?.next?.next) {
            leadingNode.next = leadingNode.next.next;
        } else {
            leadingNode.next = null;
        }

        this.length--;
        return this.printList();
    }
}

export class DoublyLinkedList {
    public head: DoubleNode;
    public tail: DoubleNode;
    public length: number;

    constructor(value: any) {
        this.head = {
            value,
            next: null,
            prev: null,
        }
        this.tail = this.head;
        this.length = 1;
    }

    public append(value: any) {
        const newNode: DoubleNode = {
            value,
            next: null,
            prev: null,
        }

        newNode.prev = this.tail;
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this.printList();
    }

    public prepend(value: any) {
        const newNode: DoubleNode = {
            value,
            next: null,
            prev: null,
        }

        newNode.next = this.head;
        this.head.prev = newNode;
        this.head = newNode;
        this.length++;

        return this.printList();
    }

    private printList() {
        const array = [];
        let currentNode: DoubleNode | null = this.head;

        while (currentNode !== null) {
            array.push(`Value: ${Number(currentNode.value)}, Next: ${currentNode.next?.value}, Prev: ${currentNode.prev?.value}`);
            currentNode = currentNode.next;
        }

        // console.log(array);
        return array;
    }

    private traverseToIndex(index: number) {
        let node: DoubleNode = this.head;

        if (index > this.length) {
            return null;
        }

        for (let i = 0; i < index; i++) {
            if (node?.next) {
                node = node.next;
            }
        }

        return node;
    }

    public insert(index: number, value: any) {
        const newNode: DoubleNode = {
            value,
            next: null,
            prev: null,
        }

        if (index > this.length) {
            throw new Error('Insert index out of bounds');
        }

        if (index === 0) {
            this.prepend(value);
            return this.printList();
        }

        const leadingNode = this.traverseToIndex(index - 1);
        const followingNode = leadingNode?.next;

        if (leadingNode?.next) {
            newNode.next = leadingNode.next;
            newNode.prev = leadingNode;
            leadingNode.next = newNode;
            if (followingNode) {
                followingNode.prev = newNode;
            }
            this.length++;
            return this.printList();
        }
    }

    public remove(index: number) {
        if (index > this.length) {
            throw new Error('Insert index out of bounds');
        }

        if (index === 0 && this.length > 1) {
            if (this.head.next) {
                this.head = this.head.next;
                this.head.prev = null;
            } else {
                throw new Error('Cannot remove last item from LinkedList instance');
            }
            return this.printList();
        }

        const leadingNode = this.traverseToIndex(index - 1);
        const followingNode = leadingNode?.next;

        if (leadingNode?.next?.next) {
            leadingNode.next = leadingNode.next.next;
        } else if (leadingNode) {
            leadingNode.next = null;
        }

        if (followingNode?.prev?.prev) {
            followingNode.prev = followingNode.prev.prev;
        } else if (followingNode) {
            followingNode.prev = null;
        }

        this.length--;
        return this.printList();
    }

    public reverse() {
        if (!this.head.next) {
            return this.printList();
        }

        let tmp = null;
        let current: DoubleNode | null = this.head;

        while (current) {
            tmp = current.prev;
            current.prev = current.next;
            current.next = tmp;
            current = current.prev;
        }

        if (tmp?.prev) {
            this.head = tmp.prev;
        }

        return this.printList();
    }
}

const myLinkedList = new DoublyLinkedList(10);
myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(1);
myLinkedList.insert(1, 12);
myLinkedList.remove(0);
myLinkedList.reverse();
