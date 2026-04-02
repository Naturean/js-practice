/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  if (s.length === 0) {
    return 0;
  }

  let left = 0;
  let right = 1;
  let max = 1;
  const found = new Set(s[0]);
  while (right < s.length) {
    // 如果发现重复字符，就从上一个重复字符之后重新计算
    if (found.has(s[right])) {
      while (s[left] !== s[right]) {
        // 除重复字符外，删掉中途存在Set中的字符
        found.delete(s[left]);
        left++;
      }
      // 还需要跳过上一个重复字符
      left++;
    } else {
      // 非重复，加入Set
      found.add(s[right]);
    }
    // 重新计算长度
    const now = right - left + 1;
    max = now > max ? now : max;
    // 遍历字符串
    right++;
  }

  return max;
};
