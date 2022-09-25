function sawtooth(arr: number[]): number {
    let result = 0;
    let n = arr.length;
    let saw = new Array<number>(n);

    if (n === 0 || n === 1) {
        return 0;
    }
    if (n === 2) {
        if (arr[0] > arr[1] || arr[1] > arr[0]) return 1;
        else return 0;
    }

    saw[0] = 0;

    if (arr[0] > arr[1] || arr[1] > arr[0]) {
        saw[1] = 2;
    }

    for (let i = 2; i < n; i++) {
        if ((arr[i - 2] < arr[i - 1] && arr[i - 1] > arr[i])
            || (arr[i - 2] > arr[i - 1] && arr[i - 1] < arr[i])) {
            if (i == 2) {
                saw[i] = saw[i - 2] + 3;
            }
            else {
                saw[i] = saw[i - 2] + 2;
            }
        }
        else if (arr[i - 1] > arr[i] || arr[i] > arr[i - 1]) {
            saw[i] = 2;
        }
    }

    for (let i = 0; i < n; i++) {
        if (saw[i] <= 0) continue;
        result += saw[i] - 1;
    }
    return result;
}
