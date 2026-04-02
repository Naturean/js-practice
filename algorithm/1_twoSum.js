/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const prevNums = {};
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index];
    const diff = target - num;
    if (diff in prevNums) {
      return [index, prevNums[diff]];
    } else {
      prevNums[num] = index;
    }
  }
  return [];
};
