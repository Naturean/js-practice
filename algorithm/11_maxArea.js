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
    if (height[left] < height[right]) {
      left++;
    } else {
      right--;
    }
  }
  return max;
};

