/**
 * 手写实现 Array.prototype.map 方法
 * @param {Function} callback - 用于生成新数组元素的函数，接受三个参数：当前元素值、当前元素索引、原数组
 * @param {Object} [thisArg] - 可选参数，执行 callback 时使用的 this 值
 * @returns {Array} - 返回一个新数组，数组中的元素为 callback 函数处理原数组元素后的结果
 */

Array.prototype.myMap = function (callback, thisArg) {
  // ...
};

/**
 * 要点提示：
 * 1. map 方法会创建一个新数组，数组中的元素为原数组元素调用 callback 函数处理后的结果。
 * 2. callback 函数接受三个参数：当前元素值、当前元素索引、原数组。
 */

// 参考答案
Array.prototype.myMap = function (callback, thisArg) {
  // 参数检查
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  // 原数组
  const original = Object(this);
  const results = new Array(original.length);
  for (let i = 0; i < original.length; i++) {
    if (original.hasOwnProperty(i)) {
      results[i] = callback.call(thisArg, original[i], i, original);
    }
  }

  return results;
};

// 测试用例
class Fixed {
  constructor(fixed) {
    this.fixed = fixed;
  }
}

const arr = [1, 2, 3];
const myMappedArr = arr.myMap(function (num, index) {
  const fixed = this.fixed;
  return fixed * index + num ** 2;
}, new Fixed(2));
console.log(myMappedArr);
// 输出：[1, 6, 13]

// 对照原生map
const mappedArr = arr.map(function (num, index) {
  const fixed = this.fixed;
  return fixed * index + num ** 2;
}, new Fixed(2));
console.log(mappedArr);
// 输出：[1, 6, 13]
