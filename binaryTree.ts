class MyNode {
    value: number;
    left: MyNode | null;
    right: MyNode | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    root: MyNode | null;

    constructor() {
        this.root = null;
    }

    public insert(value: number) {
        const newNode = new MyNode(value);

        if (this.root === null) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    public lookup(value: number) {
        let lastNode: MyNode | null = null;
        let currentNode: MyNode | null = this.root;

        while (true) {
            if (!currentNode?.value) {
                return null;
            }
            if (currentNode?.value === value) {
                return {
                    node: currentNode,
                    parentNode: lastNode
                };
            } else {
                lastNode = currentNode;
                if (currentNode.value < value) {
                    currentNode = currentNode.right;
                } else {
                    currentNode = currentNode.left;
                }
            }
        }
    }

    public remove(value: number) {
        if (!this.root) {
            return false;
        }

        const lookupResult = this.lookup(value);

        if (!lookupResult) {
            return false;
        }

        let node: MyNode | null = lookupResult.node;
        let parentNode: MyNode | null = lookupResult.parentNode;

        if (node) {
            if (!node.left && !node.right) {
                if (parentNode) {
                    if (parentNode.left === node) {
                        parentNode.left = null;
                    } else {
                        parentNode.right = null;
                    }
                } else {
                    this.root = null;
                }
            } else {
                if (node.left && !node.right) {
                    if (parentNode?.right === node) {
                        parentNode.right = node.left;
                    } else if (parentNode?.left === node) {
                        parentNode.left = node.left;
                    }
                } else if (!node.left && node.right) {
                    if (parentNode?.right === node) {
                        parentNode.right = node.right;
                    } else if (parentNode?.left === node) {
                        parentNode.left = node.right;
                    }
                } else {
                    // continue looping down the tree until successor is found
                    // then replace node with successor
                }
            }
        }

        return node;
    }

    private insertNode(node: MyNode, newNode: MyNode) {
        if (newNode.value < node.value) {
            if (!node.left) {
                node.left = newNode;
            } else {
                this.insertNode(node.left, newNode);
            }
        } else {
            if (!node.right) {
                node.right = newNode;
            } else {
                this.insertNode(node.right, newNode);
            }
        }
    }
}

function traverse(node: MyNode) {
    const tree: any = { value: node?.value };
    tree.left = !node?.left ? null : traverse(node.left);
    tree.right = !node?.right ? null : traverse(node.right);
    return tree;
}

function printTreeJson(tree: BinarySearchTree) {
    const result = JSON.stringify(traverse(tree.root as MyNode));
    console.log(result);
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(15);
tree.insert(170);
tree.insert(1);
printTreeJson(tree);
tree.remove(15);
printTreeJson(tree);
tree.remove(20);
printTreeJson(tree);
