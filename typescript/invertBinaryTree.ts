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

function invertBinaryTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;

  function dfs(node: TreeNode | null) {
    if (!node) return;
    let tmp = node.left;
    node.left = node.right;
    node.right = tmp;
    dfs(node.left);
    dfs(node.right);
  }

  dfs(root);
  return root;
}

// @ts-ignore
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.right.left = new TreeNode(5);
root.right.right = new TreeNode(6);
root.right.left.left = new TreeNode(7);
root.right.left.right = new TreeNode(8);

console.log(JSON.stringify(root));
console.log(invertBinaryTree(root));
console.log(JSON.stringify(root));
