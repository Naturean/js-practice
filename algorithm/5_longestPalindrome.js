/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let maxStart = 0,
    maxLen = 0;

  function expand(left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
      left--;
      right++;
    }
    const currLen = right - left - 1;
    if (currLen > maxLen) {
      maxLen = currLen;
      maxStart = left + 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    // 奇数中心
    expand(i, i);
    // 偶数中心
    expand(i, i + 1);
  }

  return s.slice(maxStart, maxStart + maxLen);
};

// 测试用例
const res = longestPalindrome("a");
console.log(res);
