class LRUCache {
	capacity: number;
	map: Map<number, number>;

	constructor(capacity: number) {
		this.capacity = capacity;
		this.map = new Map();
	}

	get(key: number): number {
		const value: number | undefined = this.map.get(key);
		if (value === undefined) return -1;

		this.map.delete(key);
		this.map.set(key, value);

		return value;
	}

	put(key: number, value: number): void {
		if (this.map.size >= this.capacity && !this.map.has(key)) {
			const firstKey = this.map.keys().next().value;
			this.map.delete(firstKey);
		}

		this.map.delete(key);
		this.map.set(key, value);
	}
}
