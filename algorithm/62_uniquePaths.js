/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */

// 这题应该是二维动态规划，dp[i][j]表示从左上角到达第i行第j列的路径数
// 因为只能向右或向下走，所以dp[i][j] = dp[i-1][j] + dp[i][j-1]
// 但dp[i][j]仅依赖于左边和上边的值，假设从左往右、从上往下遍历，那么上行之上的值不再需要，而上行的值可以就地更新，因此可以优化为一维dp
var uniquePaths = function (m, n) {
  // dp[j]表示从左上角到达当前行第j列的路径数，初始化为0，便于后续累加
  const dp = new Array(n).fill(0);
  // 原点，只有一种路径，即不动，因此dp[0] = 1
  dp[0] = 1;
  // 自左向右、自上向下遍历
  for (let i = 0; i < m; i++) {
    for (let j = 1; j < n; j++) {
      // dp[j - 1]表示当前行左边的路径数，dp[j]表示上一行同列的路径数（因为i++后dp[j]的值没有更新，因此仍是上一行的值）
      // 因此dp[j] = dp[j - 1] + dp[j]
      dp[j] = dp[j - 1] + dp[j];
    }
  }
  // 最后dp[n - 1]即抵达右下角的路径数
  return dp[n - 1];
};
