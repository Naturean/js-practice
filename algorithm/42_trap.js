/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
  let ans = 0;
  let left = 0,
    right = height.length - 1;
  let leftMax = height[0],
    rightMax = height[height.length - 1];
  while (left < right) {
    if (leftMax < rightMax) {
      // 短板在左侧，右侧一定有比它高的，那么雨水只能到达leftMax
      // 此时left位置的雨水高度可以确定为leftMax - height[left]
      ans += leftMax - height[left];
      left++;
      leftMax = Math.max(leftMax, height[left]);
    } else {
      // 反之，结算右侧
      ans += rightMax - height[right];
      right--;
      rightMax = Math.max(rightMax, height[right]);
    }
  }
  return ans;
};

/**
 * 42. 接雨水
 * https://leetcode.cn/problems/trapping-rain-water/
 *
 * 双指针思想：
 * 从左右两侧开始维护当前的最高柱子
 * 较矮的一侧的雨水高度是可以确定的，因为另一侧一定有比它更高的柱子，此时雨水高度只能到达较矮的一侧的最高柱子
 * 因此，可以直接断定较矮的一侧的雨水高度
 */
