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

// Map版本
var lengthOfLongestSubstring = function (s) {
  // Map Version
  let left = 0,
    max = 0;
  // 跳跃表，记录字母对应的下标，后续发现重复则据此收缩窗口左边界
  const map = new Map();
  for (let right = 0; right < s.length; right++) {
    const char = s[right];
    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }
    max = Math.max(max, right - left + 1);
    // 更新跳跃表
    // 为何省去了删除重复字符的步骤？因为不再需要Set的方法来判断当前子串是否存在重复字符
    // 每次跳过上一个字符，并更新跳跃表后，总是保证该字符在当前子串中只出现一次
    map.set(char, right);
  }
  return max;
};
