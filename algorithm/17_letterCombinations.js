/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  const numberMap = {
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };

  const ans = [];
  const backtrace = (curr) => {
    if (curr.length === digits.length) {
      ans.push(curr);
      return;
    }
    for (const c of numberMap[digits[curr.length]]) {
      backtrace(curr + c);
    }
  };
  backtrace("");
  return ans;
};
