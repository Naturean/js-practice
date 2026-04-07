/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  // 排序后，重复数字会相邻，方便去重
  // 此题相比于“1. 两数之和”，用排序的原因还在于本题不需要返回下标，因此不用担心打乱原数组顺序
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length - 2; i++) {
    // 排序后，从1开始，后面就不可能有三数之和为0的结果
    if (nums[i] > 0) {
      break;
    }
    // 重复数字不再检查
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // 使用对撞指针，因为数组已排序，左指针向右移动会增大sum，右指针向左移动会减小sum，当sum等于0时，就是一个结果
    let left = i + 1;
    let right = nums.length - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum === 0) {
        res.push([nums[i], nums[left], nums[right]]);
        while (left < right && nums[left] === nums[left + 1]) left++;
        while (left < right && nums[right] === nums[right - 1]) right--;
        left++;
        right--;
      } else if (sum > 0) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};

// 测试用例
const res = threeSum([-1, 0, 1, 2, -1, -4]);
// [[-1, -1, 2], [-1, 0, 1]]
console.log(res);
