/**
 * 手写实现 Array.prototype.flat 方法
 * @param {number} depth 展平的深度，默认为 1
 */

Array.prototype.myFlat = function (depth = 1) {
  // ...
};

/**
 * 实现要点：
 * 1. 基本功能：将嵌套的数组展平为一维数组，深度决定展平多少层嵌套的数组。
 * 2. 如果 depth 小于等于 0，应该返回原数组的浅拷贝，而非原数组。
 */

// 参考实现
Array.prototype.myFlat = function (depth = 1) {
  const arr = this;
  // 如果深度小于等于0，直接返回原数组（浅拷贝）
  if (depth <= 0) {
    return [...arr];
  }
  const res = [];
  for (const item of arr) {
    if (Array.isArray(item)) {
      // 如果是数组，递归展平
      res.push(...item.myFlat(depth - 1));
    } else {
      // 否则直接添加到结果中
      res.push(item);
    }
  }
  return res;
};

// 测试用例
const nestedArray = [1, [2, [3, [4, 5], 6], 7], 8];
console.log("Depth 1:", nestedArray.myFlat());
console.log("Depth 1 (built-in):", nestedArray.flat());
// [1, 2, [3, [4, 5], 6], 7, 8]
console.log("Depth 2:", nestedArray.myFlat(2));
console.log("Depth 2 (built-in):", nestedArray.flat(2));
// [1, 2, 3, [4, 5], 6, 7, 8]
console.log("Depth Infinity:", nestedArray.myFlat(Infinity));
console.log("Depth Infinity (built-in):", nestedArray.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8]
