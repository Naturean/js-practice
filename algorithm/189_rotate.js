/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
  const times = k % nums.length;
  reverse(nums);
  reverse(nums, 0, times - 1);
  reverse(nums, times);
};

function reverse(nums, start, end) {
  start = start !== undefined ? start : 0;
  end = end !== undefined ? end : nums.length - 1;
  while (start < end) {
    const temp = nums[start];
    nums[start] = nums[end];
    nums[end] = temp;
    start++;
    end--;
  }
}
