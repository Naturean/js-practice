/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0,
    right = height.length;
  let max = 0;
  while (left < right) {
    const now = (right - left) * Math.min(height[left], height[right]);
    max = now > max ? now : max;
    // 短板效应：较短边决定了当前面积的高度，而每次移动时宽度都会减少，若短边不变，面积必然减少
    // 因此，只有移动较短的边才有可能找到更高的边来增加面积
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};
