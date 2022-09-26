// https://vanya.jp.net/vtree/
// Neat tree visualization tool

export class BinarySearchTreeNode<T> {
  data: T;
  left?: BinarySearchTreeNode<T>;
  right?: BinarySearchTreeNode<T>;

  constructor(data: T) {
    this.data = data;
  }
}

export class BinarySearchTree<T> {
  root?: BinarySearchTreeNode<T>;
  comparator: (a: T, b: T) => number;

  constructor(comparator: (a: T, b: T) => number) {
    this.comparator = comparator;
  }

  insert(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) {
      this.root = new BinarySearchTreeNode(data);
      return this.root;
    }

    let current = this.root;

    while (true) {
      if (this.comparator(data, current.data) === 1) {
        if (current.right) {
          current = current.right;
        } else {
          current.right = new BinarySearchTreeNode(data);
          return current.right;
        }
      } else {
        if (current.left) {
          current = current.left;
        } else {
          current.left = new BinarySearchTreeNode(data);
          return current.left;
        }
      }
    }
  }

  search(data: T): BinarySearchTreeNode<T> | undefined {
    if (!this.root) return undefined;

    let current = this.root;

    while (this.comparator(data, current.data) !== 0) {
      if (this.comparator(data, current.data) === 1) {
        if (!current.right) return;

        current = current.right;
      } else {
        if (!current.left) return;

        current = current.left;
      }
    }

    return current;
  }

  // BFS - Breadth First Search
  bfs(node: BinarySearchTreeNode<T> | undefined = this.root): void {
    if (node) {
      let currentNode = node;
      let queue: BinarySearchTreeNode<T>[] = [];
      queue.push(currentNode);

      while (queue.length > 0) {
        currentNode = queue.shift()!;
        console.log(currentNode.data);
        if (currentNode.left) {
          queue.push(currentNode.left);
        }
        if (currentNode.right) {
          queue.push(currentNode.right);
        }
      }
    }

  }

  // DFS - Depth First Search
  // InOrder, PreOrder, PostOrder
  inOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
    if (node) {
      this.inOrderTraversal(node.left);
      console.log(node.data);
      this.inOrderTraversal(node.right);
    }
  }
  preOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
    if (node) {
      console.log(node.data);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }
  postOrderTraversal(node: BinarySearchTreeNode<T> | undefined): void {
    if (node) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.data);
    }
  }
}

function cmp(a: number, b: number) {
  if (a < b) return -1;
  if (a > b) return 1;

  return 0;
}

const dsaTree1 = new BinarySearchTree(cmp);

dsaTree1.insert(9);
dsaTree1.insert(4);
dsaTree1.insert(20);
dsaTree1.insert(1);
dsaTree1.insert(6);
dsaTree1.insert(15);
dsaTree1.insert(170);

console.log(dsaTree1);
console.log(JSON.stringify(dsaTree1.root));

// Breadth First Search
dsaTree1.bfs();

// Depth First Search
dsaTree1.inOrderTraversal(dsaTree1.root);
dsaTree1.preOrderTraversal(dsaTree1.root);
dsaTree1.postOrderTraversal(dsaTree1.root);
