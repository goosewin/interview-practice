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

function leftRightViewOfBST(root: TreeNode | null): string {
  if (!root) return '';
  let ans: number[] = [];
  let maxDepth = 0;

  function leftView(node: TreeNode | null, depth: number) {
    if (!node) return;
    if (maxDepth < depth) {
      ans.push(node.val);
      maxDepth = depth;
    }
    leftView(node.left, depth + 1);
  }

  function rightView(node: TreeNode | null, depth: number) {
    if (!node) return;
    if (maxDepth < depth) {
      ans.push(node.val);
      maxDepth = depth;
    }
    rightView(node.right, depth + 1);
  }

  leftView(root, 1);
  ans.reverse();
  maxDepth = 1;
  rightView(root, 1);

  return ans.join(' ');
}

const tree = { val: 1, left: { val: 2, left: { val: 4 }, right: { val: 5 } }, right: { val: 3, right: { val: 6, right: { val: 14, right: { val: 17, right: { val: 19 } } } } } } as TreeNode;
// console.log(JSON.stringify(tree));

console.log(leftRightViewOfBST(tree));
