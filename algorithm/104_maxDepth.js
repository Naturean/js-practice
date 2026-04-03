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
 * @return {number}
 */
// 递归解法
var maxDepth = function (root) {
  if (!root) {
    return 0;
  }
  return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};

// DFS解法
var maxDepth = function (root) {
  let ans = 0;
  const dfs = (node, depth) => {
    if (!node) {
      return;
    }
    ans = Math.max(ans, depth);
    dfs(node.left, depth + 1);
    dfs(node.right, depth + 1);
  };
  dfs(root, 1);
  return ans;
};
