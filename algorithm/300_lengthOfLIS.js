/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  // dp[i]表示以nums[i]结尾的最长递增子序列的长度
  const dp = new Array(nums.length).fill(1);
  dp[0] = 1;
  for (let i = 1; i < nums.length; i++) {
    // 检查前面是否有小于nums[i]的数，如果有，那么nums[i]可以接在后面，此时dp[i]为这些序列中的最长
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};

/**
 * 如上是动态规划的解法，但其dp方程与以往的题目不同，dp[i]依赖于前面所有的dp[j]（j < i）
 * 因为dp[i]无法仅通过某一个dp[j]来计算，需要考虑之前的所有情况，因此必然是O(n^2)的时间复杂度
 */

/**
 * 这题还有一种较难想到的解法，即贪心
 * 维护一个数组tails，tails[i]表示长度为i+1的递增子序列的末尾元素的最小值
 * 从贪心的视角出发，[1, 3]这样的序列要比[1, 6]更好，因为前者的末尾元素更小，更有可能接上后续的数字
 * 这种解法有严格证明，但在实际面试中难以直接证明，这里放出来代码仅供参考
 */

var lengthOfLIS = function (nums) {
  const tails = [];
  for (let i = 0; i < nums.length; i++) {
    // 在tails中找到第一个大于等于nums[i]的元素，并将其替换为nums[i]
    // 否则，将nums[i]添加到tails末尾
    // 这里的查找可以用二分查找优化，但这里主要展示思路，不再做极致优化
    let hasInsert = false;
    for (let j = 0; j < tails.length; j++) {
      if (nums[i] <= tails[j]) {
        tails[j] = nums[i];
        hasInsert = true;
        break;
      }
    }
    if (!hasInsert) {
      tails.push(nums[i]);
    }
  }
  // 最后tails的长度即为最长递增子序列的长度
  return tails.length;
};
