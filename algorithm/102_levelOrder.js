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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  if (!root) {
    return [];
  }

  const queue = [root];
  const res = [];
  while (queue.length) {
    const levelSize = queue.length;
    const levelRes = [];
    for (let i = 0; i < levelSize; i++) {
      const node = queue.shift();
      levelRes.push(node.val);
      if (node.left) {
        queue.push(node.left);
      }
      if (node.right) {
        queue.push(node.right);
      }
    }
    res.push(levelRes);
  }
  return res;
};

/**
 * 核心思想：
 * 1. Queue + BFS
 * 2. 双层循环：外层循环控制层数，内层循环控制每层的节点数
 */
