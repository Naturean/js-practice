/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  const ans = [];
  const curr = [];
  const backtrace = (sum, start) => {
    if (target < sum) {
      return;
    }
    if (target === sum) {
      ans.push(curr.slice());
      return;
    }
    for (let i = start; i < candidates.length; i++) {
      curr.push(candidates[i]);
      backtrace(sum + candidates[i], i);
      curr.pop();
    }
  };
  backtrace(0, 0);
  return ans;
};
