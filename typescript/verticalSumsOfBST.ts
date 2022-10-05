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

function verticalSums(root: TreeNode | null): { [k: number]: number } {
  if (!root) return {};
  let ans: { [k: number]: number } = {};

  function traverse(node: TreeNode | null, coordinate = 0) {
    if (!node) return;
    if (!ans[coordinate]) ans[coordinate] = 0;

    ans[coordinate] += node.val;
    traverse(node.left, coordinate - 1);
    traverse(node.right, coordinate + 1);
  }

  traverse(root);
  return ans;
}

const root = new TreeNode(1)
root.left = new TreeNode(2)
root.right = new TreeNode(3)
root.right.left = new TreeNode(5)
root.right.right = new TreeNode(6)
root.right.left.left = new TreeNode(7)
root.right.left.right = new TreeNode(8)

console.log(verticalSums(root));
