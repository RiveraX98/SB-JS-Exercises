/** BinaryTreeNode: node for a general tree. */

class BinaryTreeNode {
  constructor(val, left = null, right = null) {
    this.val = val;
    this.left = left;
    this.right = right;
  }
}

class BinaryTree {
  constructor(root = null) {
    this.root = root;
  }

  minDepth() {
    if (!this.root) return 0;

    function findMinDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findMinDepth(node.right) + 1;
      if (node.right === null) return findMinDepth(node.left) + 1;
      return Math.min(findMinDepth(node.left), findMinDepth(node.right)) + 1;
    }

    return findMinDepth(this.root);
  }

  maxDepth() {
    if (!this.root) return 0;

    function findMaxDepth(node) {
      if (node.left === null && node.right === null) return 1;
      if (node.left === null) return findMaxDepth(node.right) + 1;
      if (node.right === null) return findMaxDepth(node.left) + 1;
      return Math.max(findMaxDepth(node.left), findMaxDepth(node.right)) + 1;
    }

    return findMaxDepth(this.root);
  }

  maxSum() {
    let result = 0;

    function findMaxSum(node) {
      if (node === null) return 0;
      const leftSum = findMaxSum(node.left);
      const rightSum = findMaxSum(node.right);
      result = Math.max(result, node.val + leftSum + rightSum);
      return Math.max(0, leftSum + node.val, rightSum + node.val);
    }

    findMaxSum(this.root);
    return result;
  }

  nextLarger(lowerBound) {
    if (!this.root) return null;

    let queue = [this.root];
    let closest = null;
    
    while (queue.length) {
      let currentNode = queue.shift();
      let currentVal = currentNode.val;
      let higherThanLowerBound = currentVal > lowerBound;
      let shouldReassignClosest = currentVal < closest || closest === null;

      if (higherThanLowerBound && shouldReassignClosest) {
        closest = currentVal;
      }

      if (currentNode.left) queue.push(currentNode.left);
      if (currentNode.right) queue.push(currentNode.right);
    }

    return closest;
  }
}

module.exports = { BinaryTree, BinaryTreeNode };
