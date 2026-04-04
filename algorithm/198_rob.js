/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  const dp = new Array(nums.length);
  let max = nums[0];
  for (let i = 0; i < nums.length; i++) {
    // dp[i]表示抢劫第i个房子能得到的最大金额
    // 抢劫第i个房子，那么就不能抢劫第i-1个房子，但可以跳过i-1抢劫第i-2个房子，或者跳过i-1和i-2抢劫第i-3个房子
    // 但到跳过i-1、i-2和i-3直接抢劫第i-4个房子是不合理的，因为这样i-2也是可以抢的，最优解肯定要把i-2带上
    // 所以dp[i] = max(dp[i-2], dp[i-3]) + nums[i]
    // 由于从i=0开始，i-2和i-3可能越界，因此需要判断一下
    dp[i] =
      Math.max(i - 2 < 0 ? 0 : dp[i - 2], i - 3 < 0 ? 0 : dp[i - 3]) + nums[i];
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 理论上可以优化空间复杂度，但这种理解的动态规划方程不太适合
// 因为下一轮的i-2和i-3分别是当前的i-1和i-2，因此需要三个变量来存储当前的i-1、i-2和i-3
// 过于复杂了

/**
 * 因此，我们可以换一种思路来理解动态规划方程
 * dp[i]表示抢劫前i个房子能得到的最大金额
 * 那么抢劫第i个房子，那么就不能抢劫第i-1个房子，因此最大金额即为抢劫前i-2个房子的最大金额加抢劫第i个房子的金额，因此dp[i] = dp[i-2] + nums[i]
 * 要么不抢劫第i个房子，最大金额即为抢劫前i-1个房子的最大金额，因此dp[i] = dp[i-1]
 * 因此dp[i] = max(dp[i-1], dp[i-2] + nums[i])
 * 这种解法将dp[i]的依赖优化至dp[i-1]和dp[i-2]，因此滚动过程不需存储多余遍历，优化空间复杂度只需两个变量来存储dp[i-1]和dp[i-2]即可
 */
var rob = function (nums) {
  const dp = new Array(nums.length + 1);
  let max = nums[0];
  dp[0] = 0;
  dp[1] = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i - 1]);
    max = Math.max(max, dp[i]);
  }
  return max;
};

// 空间复杂度优化
var rob = function (nums) {
  let prev = 0;
  let curr = nums[0];
  for (let i = 2; i <= nums.length; i++) {
    // 向前滚动，curr表示dp[i-1]，prev表示dp[i-2]
    const temp = curr;
    curr = Math.max(curr, prev + nums[i - 1]);
    prev = temp;
  }
  // 最后curr表示dp[nums.length]，即抢劫前nums.length个房子能得到的最大金额
  return curr;
};
