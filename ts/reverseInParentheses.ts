const reverse = (str: string) => str.split('').reverse().join('');

function solution(inputString: string): string {
	while (inputString.includes('(')) {
		const l = inputString.lastIndexOf('(');
		const r = inputString.indexOf(')', inputString.lastIndexOf('('));
		inputString = inputString.slice(0, l) + reverse(inputString.slice(l + 1, r)) + (r + 1 === inputString.length ? inputString.slice(r, -1) : inputString.slice(r + 1));
	}
	return inputString;
}

console.log(solution("foo(bar(baz))blim"));
