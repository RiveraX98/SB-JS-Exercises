/** TreeNode: node for a general tree. */

class TreeNode {
  constructor(val, children = []) {
    this.val = val;
    this.children = children;
  }
}

class Tree {
  constructor(root = null) {
    this.root = root;
  }

  sumValues(node) {
    if (!this.root) return 0;

    let total = this.root.val;

    function findSum(node) {
      for (let child of node.children) {
        total += child.val;
        if (child.children.length > 0) {
          findSum(child);
        }
      }
    }

    findSum(this.root);
    return total;
  }

  countEvens() {
    if (!this.root) return 0;

    let count = this.root.val % 2 === 0 ? 1 : 0;

    function findEvenCount(node) {
      for (let child of node.children) {
        if (child.val % 2 === 0) count++;
        if (child.children.length > 0) {
          findEvenCount(child);
        }
      }
    }

    findEvenCount(this.root);
    return count;
  }

  numGreater(num) {
    if (!this.root) return 0;

    let count = this.root.val > num ? 1 : 0;

    function findNumGreater(node) {
      for (let child of node.children) {
        if (child.val > num) count++;
        if (child.children.length > 0) {
          findNumGreater(child);
        }
      }
    }

    findNumGreater(this.root);
    return count;
  }
}

module.exports = { Tree, TreeNode };
