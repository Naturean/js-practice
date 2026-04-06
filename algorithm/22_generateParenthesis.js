/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  const ans = [];
  const curr = [];
  const backtrace = (leftCount, rightCount) => {
    if (rightCount > leftCount || leftCount > n) {
      // 非法
      return;
    }

    if (leftCount === n && rightCount === n) {
      // 合法
      ans.push(curr.join(""));
    }

    // 尝试左括号
    curr.push("(");
    backtrace(leftCount + 1, rightCount);
    curr.pop();

    // 尝试右括号
    curr.push(")");
    backtrace(leftCount, rightCount + 1);
    curr.pop();
  };
  backtrace(0, 0);
  return ans;
};
