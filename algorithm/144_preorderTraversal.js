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
 * @return {number[]}
 */
// 递归解法
var preorderTraversal = function (root) {
  const queue = [root];
  let res = [];
  while (queue.length) {
    const curr = queue.shift();
    if (!curr) {
      continue;
    }
    res.push(curr.val);
    res.push(...preorderTraversal(curr.left));
    res.push(...preorderTraversal(curr.right));
  }
  return res;
};

// 迭代解法
var preorderTraversal = function (root) {
  const stack = [root];
  let res = [];
  while (stack.length) {
    const curr = stack.pop();
    if (!curr) {
      continue;
    }
    res.push(curr.val);
    // 栈FILO，因此先右后左
    stack.push(curr.right);
    stack.push(curr.left);
  }
  return res;
};

// 另一种递归解法
var preorderTraversal = function (root) {
  let res = [];
  const dfs = (node) => {
    if (!node) {
      return;
    }
    res.push(node.val);
    dfs(node.left);
    dfs(node.right);
  };
  dfs(root);
  return res;
};
