/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
  // O(n)首先记录已有数字
  const set = new Set(nums);
  let ans = 0;
  for (const num of set) {
    // num - 1不在集合中，说明是一段序列的起点
    if (!set.has(num - 1)) {
      // 开始数这段序列的长度
      let curr = num + 1;
      // 这里循环计数，实际上由于非起点数字会被跳过，因此整体复杂度还是O(n)
      while (set.has(curr)) {
        curr++;
      }
      ans = Math.max(ans, curr - num);
    }
  }
  return ans;
};
