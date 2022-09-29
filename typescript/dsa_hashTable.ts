// @ts-ignore
import { SingleNode, SinglyLinkedList } from "./linkedList.ts";

class HashTable {
	private data: any[];

	constructor(size: number) {
		this.data = new Array(size);
	}

	public set(key: string, value: any) {
		const hashPosition = this._hash(key);
		if (!this.data[hashPosition]) {
			this.data[hashPosition] = new SinglyLinkedList([key, value]);
		} else {
			this.data[hashPosition].append([key, value]);
		}
		return value;
	}

	public get(key: string) {
		const hashPosition = this._hash(key);
		const currentBucket: SinglyLinkedList = this.data[hashPosition];

		if (currentBucket.length) {
			let node: SingleNode | null = currentBucket.head;
			while (node) {
				if (node.value[0] === key) {
					return node.value[1];
				}
				node = node.next;
			}
		}
		return undefined;
	}

	public keys() {
		return this.iterateForIndex(0);
	}

	public values() {
		return this.iterateForIndex(1);
	}

	private _hash(key: string) {
		let hash = 0;
		for (let i = 0; i < key.length; i++) {
			hash = (hash + key.charCodeAt(i) * i) % this.data.length
		}
		return hash;
	}

	private iterateForIndex(iterator: number) {
		if (!this.data.length) {
			return undefined;
		}

		const result: number[] = [];
		this.data.forEach((bucket: SinglyLinkedList) => {
			if (bucket?.length) {
				if (bucket.length > 1) {
					let node: SingleNode | null = bucket.head;
					while (node) {
						result.push(node.value[iterator]);
						node = node.next;
					}
				}
				else {
					result.push(bucket.head.value[iterator]);
				}
			}
		});
		return result;
	}
}

const myHashTable = new HashTable(50);
console.log(myHashTable.set('grapes', 10000));
console.log(myHashTable.get('grapes'));
console.log(myHashTable.set('grapesssss', 11111));
console.log(myHashTable.get('grapesssss'));
console.log(myHashTable.set('apples', 9));
console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
console.log(myHashTable.values());

// console.log(myHashTable.data);
