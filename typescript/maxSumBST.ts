class TreeNode {
	val: number
	left: TreeNode | null
	right: TreeNode | null
	constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
		this.val = (val === undefined ? 0 : val)
		this.left = (left === undefined ? null : left)
		this.right = (right === undefined ? null : right)
	}
}

type MaxSumBSTCandidate = [boolean, number, number, number];

function maxSumBST(root: TreeNode | null): number {
	if (!root) return 0;
	let ans = 0;

	function dfs(node: TreeNode): MaxSumBSTCandidate {
		if (!node.left && !node.right) {
			ans = Math.max(ans, node.val);
			return [true, node.val, node.val, node.val]
		}

		let leftCandidate: MaxSumBSTCandidate = [true, 0, node.val, Number.MIN_SAFE_INTEGER];
		let rightCandidate: MaxSumBSTCandidate = [true, 0, Number.MAX_SAFE_INTEGER, node.val];
		let leftValue = Number.MIN_SAFE_INTEGER;
		let rightChild = Number.MAX_SAFE_INTEGER;

		if (node.left) {
			leftValue = node.left.val;
			leftCandidate = dfs(node.left);
		}
		if (node.right) {
			rightChild = node.right.val;
			rightCandidate = dfs(node.right);
		}

		if (
			!leftCandidate[0] ||
			!rightCandidate[0] ||
			leftValue >= node.val ||
			rightChild <= node.val ||
			leftCandidate[3] >= node.val ||
			rightCandidate[2] <= node.val
		) {
			return [false, node.val, node.val, node.val];
		}

		const sum = leftCandidate[1] + rightCandidate[1] + node.val;
		ans = Math.max(sum, ans);

		return [true, sum, leftCandidate[2], rightCandidate[3]];
	}

	dfs(root);

	return ans;
}
