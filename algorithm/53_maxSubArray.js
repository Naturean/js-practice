/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  // curr表示当前计算的和
  let curr = nums[0];
  // max为最大和
  let max = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 计算当前和，但如果当前数字比和还大，那么说明从当前数字从新开始计算反而更好，因此需要判断
    curr = Math.max(nums[i], nums[i] + curr);
    // 如果和更大，修改max
    max = Math.max(max, curr);
  }
  return max;
};

/**
 * 本质还是动态规划，上述解只是优化了空间复杂度
 * 下列为最初的动态规划解法
 */

var maxSubArray = function (nums) {
  // dp[i]表示以第i个数字结尾的最大子数组和
  const dp = new Array(nums.length);
  // 先看后续的转移方程，会发现仅依赖于dp[i-1]，只需要一个初值，即dp[0]为nums[0]
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // 第i个数字结尾的最大子数组和
    // 我们知道第i-1个数字结尾的最大子数组和
    // 那么再加上第i个数字，得到一个以第i个数字结尾的子数组和
    // 但试想dp[i-1]是负数，那么加上第i个数字反而更小了，因此此时dp[i]应该从第i个数字重新开始计算
    // 因此dp[i]为nums[i]和nums[i] + dp[i - 1]中的较大值
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1]);
  }
  // 实际上在前面循环时记录最大值更好，但为了更直观地展示动态规划的思想，这里最后再遍历一次dp数组找出最大值
  return Math.max(...dp);
};

/**
 * 第一个优化空间复杂度的解法中，由于在循环中计算了max，因此除了dp[i-1]外，前面的值都不需要了
 * 上面就用curr来代替dp[i-1]
 */
