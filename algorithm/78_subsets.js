/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  const ans = [];
  const backtrace = (curr, options) => {
    ans.push(curr);
    for (let i = 0; i < options.length; i++) {
      backtrace([...curr, options[i]], options.slice(i + 1));
    }
  };
  backtrace([], nums);
  return ans;
};
