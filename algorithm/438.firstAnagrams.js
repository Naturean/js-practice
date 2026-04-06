/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
  const sLen = s.length;
  const pLen = p.length;

  if (pLen > sLen) {
    return [];
  }

  const pCount = new Array(26).fill(0);
  const sCount = new Array(26).fill(0);
  for (let i = 0; i < pLen; i++) {
    pCount[p[i].charCodeAt() - "a".charCodeAt()]++;
    sCount[s[i].charCodeAt() - "a".charCodeAt()]++;
  }

  let diff = 0;
  for (let i = 0; i < 26; i++) {
    diff += pCount[i] !== sCount[i] ? 1 : 0;
  }

  let ans = [];
  if (diff === 0) {
    ans.push(0);
  }

  for (let i = 0; i < sLen - pLen; i++) {
    // 讨论滑动窗口向后移动的情况：移除s[i]，添加s[i + pLen]
    const removedCharCode = s[i].charCodeAt() - "a".charCodeAt();
    // 移除前一致，则diff++
    if (sCount[removedCharCode] === pCount[removedCharCode]) {
      diff++;
    }
    sCount[removedCharCode]--;
    // 移除后一致，则diff--
    if (sCount[removedCharCode] === pCount[removedCharCode]) {
      diff--;
    }

    const addedCharCode = s[i + pLen].charCodeAt() - "a".charCodeAt();
    if (sCount[addedCharCode] === pCount[addedCharCode]) {
      diff++;
    }
    sCount[addedCharCode]++;
    if (sCount[addedCharCode] === pCount[addedCharCode]) {
      diff--;
    }

    // 滑动窗口移动后的起点是i + 1
    if (diff === 0) {
      ans.push(i + 1);
    }
  }

  return ans;
};

/**
 * 438. 找到字符串中所有字母异位词
 * https://leetcode.cn/problems/find-all-anagrams-in-a-string/
 *
 * 滑动窗口
 */
