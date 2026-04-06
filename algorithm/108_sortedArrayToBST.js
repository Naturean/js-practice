/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length === 0) {
    return null;
  }

  const mid = Math.floor(nums.length / 2);
  const root = new TreeNode(nums[mid], null, null);
  root.left = sortedArrayToBST(nums.slice(0, mid));
  root.right = sortedArrayToBST(nums.slice(mid + 1));
  return root;
};

/**
 * 或者直接传递左右边界，减少slice的空间开销
 */

var sortedArrayToBST = function (nums) {
  const buildBST = (start, end) => {
    if (start > end) {
      return null;
    }

    const mid = Math.floor((end + start) / 2);
    const root = new TreeNode(nums[mid], null, null);
    root.left = buildBST(start, mid - 1);
    root.right = buildBST(mid + 1, end);

    return root;
  };

  return buildBST(0, nums.length - 1);
};
