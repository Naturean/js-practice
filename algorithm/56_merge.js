/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  intervals.sort((a, b) => a[0] - b[0]);
  const ans = [];
  let curr = intervals[0].slice();
  for (let i = 0; i < intervals.length - 1; i++) {
    if (curr[1] >= intervals[i + 1][0]) {
      curr[1] = Math.max(curr[1], intervals[i + 1][1]);
    } else {
      ans.push(curr.slice());
      curr = intervals[i + 1];
    }
  }
  ans.push(curr.slice());
  return ans;
};

/**
 * 56. 合并区间
 * https://leetcode.cn/problems/merge-intervals/
 *
 * 先排序，再遍历合并
 */
