/**
 * 手写实现 Array.prototype.filter 方法
 * @param {Function} callback - 用于测试数组元素的函数，接受三个参数：当前元素值、当前元素索引、原数组
 * @param {Object} [thisArg] - 可选参数，执行 callback 时使用的 this 值
 * @returns {Array} - 返回一个新数组，包含通过 callback 函数测试的所有元素
 */

Array.prototype.myFilter = function (callback, thisArg) {
  // ...
};

/**
 * 要点提示：
 * 1. filter 方法会创建一个新数组，包含通过 callback 函数测试的所有元素。
 * 2. callback 函数接受三个参数：当前元素值、当前元素索引、原数组。
 * 3. 注意处理稀疏数组和 this 绑定
 */

Array.prototype.myFilter = function (callback, thisArg) {
  // 参数检查
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const original = Object(this);
  const results = [];
  for (let i = 0; i < original.length; i++) {
    if (
      original.hasOwnProperty(i) &&
      callback.call(thisArg, original[i], i, original)
    ) {
      results.push(original[i]);
    }
  }
  return results;
};

// 测试用例
const arr = [1, 2, 3, 4, 5];
const myFilteredArr = arr.myFilter(function (num) {
  return num % 2 === 0;
});
const filteredArr = arr.filter(function (num) {
  return num % 2 === 0;
});
console.log("My Filtered Array:", myFilteredArr);
// 输出：[2, 4]
console.log("Filtered Array:", filteredArr);
// 输出：[2, 4]
