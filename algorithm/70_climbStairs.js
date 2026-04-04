/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  const dp = new Array(n + 1);
  dp[0] = 1;
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

/**
 * 动态规划，dp[i]表示爬到第i阶的方法数
 * 由于可以走1步或2步，因此抵达第i阶的方法数等于抵达第i-1阶和第i-2阶的方法数之和
 * 即dp[i] = dp[i-1] + dp[i-2]
 * 由于涉及到dp[i-1]和dp[i-2]，因此初值dp[0]和dp[1]
 * dp[0]可以理解为在地面上，不动即为一种方法，因此dp[0] = 1
 * dp[1]则是从地面爬到第一阶，只有一种方法，即走一步，因此dp[1] = 1
 * 最后返回dp[n]即为爬到第n阶的方法数
 */
