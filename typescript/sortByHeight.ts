function solution(a: number[]): number[] {
    const b = a.slice();
    const pos = [];

    let i = -1;
    while ((i = a.indexOf(-1, i + 1)) > -1) {
        pos.push(i);
    }

    const rpos = pos.slice();
    while (rpos.length) {
        b.splice(rpos.pop() as number, 1);
    }

    b.sort((a, b) => a - b);
    while (pos.length) {
        b.splice(pos.shift() as number, 0, -1);
    }

    return b;
}
