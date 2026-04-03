/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function (root) {
  const isTwoSymmetric = (left, right) => {
    // 都为null
    if (!left && !right) {
      return true;
    }
    // 有且仅有一个为null
    if (!left || !right) {
      return false;
    }
    // 值不相等
    if (left.val !== right.val) {
      return false;
    }
    // 检查镜像子树
    return (
      isTwoSymmetric(left.left, right.right) &&
      isTwoSymmetric(left.right, right.left)
    );
  };
  // 题目条件节点数必然大于等于1，所以这里的root判断其实可以不要
  return root ? isTwoSymmetric(root.left, root.right) : true;
};

// 迭代解法
var isSymmetric = function (root) {
  if (!root) {
    return true;
  }
  const queue = [root.left, root.right];
  while (queue.length) {
    // 每次把需要检查相等的两个节点成对放入队列中，进行两两比较
    const left = queue.shift();
    const right = queue.shift();
    if (!left && !right) {
      continue;
    }
    if (!left || !right) {
      return false;
    }
    if (left.val !== right.val) {
      return false;
    }
    queue.push(left.left, right.right, left.right, right.left);
  }
  return true;
};
