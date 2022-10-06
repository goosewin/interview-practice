class TimeMap {
  private map: Map<string, Array<[string, number]>> = new Map();

  set(key: string, value: string, timestamp: number): void {
    const values = this.map.get(key) || [];
    values.push([value, timestamp]);
    this.map.set(key, values);
  }

  get(key: string, timestamp: number): string {
    const values = this.map.get(key) || [];

    let left = 0;
    let right = values.length - 1;
    let nearest = "";

    while (left <= right) {
      const mid = (left + right) / 2 | 0;
      const [value, timestamp_prev] = values[mid];

      if (timestamp_prev === timestamp) {
        return value;
      } else if (timestamp_prev > timestamp) {
        right = mid - 1;
      } else {
        left = mid + 1;
        nearest = value;
      }
    }

    return nearest;
  }
}
