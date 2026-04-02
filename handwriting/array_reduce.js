/**
 * 手写实现 Array.prototype.reduce 方法
 * @param {Function} callback - 用于执行数组中每个元素的函数，接受四个参数：累计器（accumulator）、当前元素值、当前元素索引、原数组
 * @param {any} [initialValue] - 可选参数，作为第一次调用 callback 函数时第一个参数的值。如果没有提供 initialValue，则将使用数组中的第一个元素作为初始累计器的值，并从第二个元素开始执行 callback 函数。
 * @returns {any} - 返回通过对数组中的每个元素执行 callback 函数得到的最终累计器的值
 */

Array.prototype.myReduce = function (callback, initialValue) {
  // ...
};

/**
 * 要点提示：
 * 1. reduce 方法会对数组中的每个元素执行 callback 函数，最终得到一个单一的值。
 * 2. callback 函数接受四个参数：累计器（accumulator）、当前元素值、当前元素索引、原数组。
 * 3. initialValue 是可选的，如果没有提供，则使用数组中的第一个元素作为初始累计器的值，并从第二个元素开始执行 callback 函数。
 * 4. 既没有初始值，也没有元素时，应该抛出错误。
 */

Array.prototype.myReduce = function (callback, initialValue) {
  // 类型检查
  if (typeof callback !== "function") {
    throw new TypeError(callback + " is not a function");
  }

  const arr = Object(this);
  let res = initialValue;
  let initialed = arguments.length >= 2;

  if (!initialed && !arr.length) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  for (let i = 0; i < arr.length; i++) {
    if (!(i in arr)) continue;
    if (!initialed) {
      res = arr[i];
      initialed = true;
    } else {
      res = callback(res, arr[i], i, arr);
    }
  }
  return res;
};

/**
 * 测试用例
 */

// 空数组 + 初始值
const arr1 = [];
console.log(arr1.myReduce((acc, cur) => acc + cur, 0)); // 输出: 0
console.log(arr1.reduce((acc, cur) => acc + cur, 0)); // 输出: 0

// 空数组 + 无初始值
const arr2 = [];
try {
  console.log(arr2.myReduce((acc, cur) => acc + cur)); // 抛出错误
} catch (e) {
  console.error(e.message); // 输出: Reduce of empty array with no initial value
}
try {
  console.log(arr2.reduce((acc, cur) => acc + cur)); // 抛出错误
} catch (e) {
  console.error(e.message); // 输出: Reduce of empty array with no initial value
}

// 简单数组 + 初始值
const arr3 = [1, 2, 3];
console.log(arr3.myReduce((acc, cur) => acc + cur, 0)); // 输出: 6
console.log(arr3.reduce((acc, cur) => acc + cur, 0)); // 输出: 6

// 简单数组 + 无初始值
const arr4 = [1, 2, 3];
console.log(arr4.myReduce((acc, cur) => acc + cur)); // 输出: 6
console.log(arr4.reduce((acc, cur) => acc + cur)); // 输出: 6

// 稀疏数组 + 初始值
const arr5 = [1, , 3];
console.log(arr5.myReduce((acc, cur) => acc + cur, 0)); // 输出: 4
console.log(arr5.reduce((acc, cur) => acc + cur, 0)); // 输出: 4

// 稀疏数组 + 无初始值
const arr6 = [1, , 3];
console.log(arr6.myReduce((acc, cur) => acc + cur)); // 输出: 4
console.log(arr6.reduce((acc, cur) => acc + cur)); // 输出: 4

// 嵌套数组 + 初始值
const arr7 = [
  [1, 2],
  [3, 4],
];
console.log(arr7.myReduce((acc, cur) => acc.concat(cur), [])); // 输出: [1, 2, 3, 4]
console.log(arr7.reduce((acc, cur) => acc.concat(cur), [])); // 输出: [1, 2, 3, 4]

// 嵌套数组 + 无初始值
const arr8 = [
  [1, 2],
  [3, 4],
];
console.log(arr8.myReduce((acc, cur) => acc.concat(cur))); // 输出: [1, 2, 3, 4]
console.log(arr8.reduce((acc, cur) => acc.concat(cur))); // 输出: [1, 2, 3, 4]

// 大数组 + 初始值
const arr9 = Array.from({ length: 1000 }, (_, i) => i + 1);
console.log(arr9.myReduce((acc, cur) => acc + cur, 0)); // 输出: 500500
console.log(arr9.reduce((acc, cur) => acc + cur, 0)); // 输出: 500500
