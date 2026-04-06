/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  const ans = [];
  const backtrace = (curr, selections) => {
    if (selections.length === 0) {
      ans.push(curr);
      return;
    }
    for (let i = 0; i < selections.length; i++) {
      backtrace(
        [...curr, selections[i]],
        selections.filter((_, index) => index !== i),
      );
    }
  };
  backtrace([], nums);
  return ans;
};
