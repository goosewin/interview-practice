// @ts-ignore
class BinaryTree {
  value: number;
  left: BinaryTree | null;
  right: BinaryTree | null;

  constructor(value: number) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

export function branchSums(root: BinaryTree): number[] {
  let ans: number[] = [];

  function dfs(node: BinaryTree | null, accumulator: number = 0) {
    if (!node) return;
    if (!node.left && !node.right) {
      ans.push(accumulator + node.value);
      return;
    }

    dfs(node.left, accumulator + node.value);
    dfs(node.right, accumulator + node.value);
  }

  dfs(root);
  return ans;
}
