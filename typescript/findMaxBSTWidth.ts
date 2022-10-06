// @ts-ignore
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

function getMaxWidth(root: TreeNode | null): number {
  if (!root) return 0;
  const widths: number[] = [];

  function traverse(node: TreeNode | null, depth = 0) {
    if (!node) return;
    if (!widths[depth]) widths[depth] = 0;

    widths[depth]++;
    traverse(node.left, depth + 1);
    traverse(node.right, depth + 1);
  }

  traverse(root);
  return Math.max(...widths);
}

// @ts-ignore
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.left.left = new TreeNode(1);
root.left.left.right = new TreeNode(4);
root.left.left.left = new TreeNode(0);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);

console.log(getMaxWidth(root));
