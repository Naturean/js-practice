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
 */

Array.prototype.myReduce = function (callback, initialValue) {
  if (this == null || this === undefined) {
    throw new TypeError("Array.prototype.myReduce called on null or undefined");
  }

  if (typeof callback !== "function") {
    throw new TypeError(String(callback) + " is not a function");
  }

  const original = Object(this);
  let accumulator = initialValue;
  let initialed = arguments.length >= 2;

  // 如果没有提供 initialValue，并且数组为空，则抛出 TypeError
  if (!initialed && original.length === 0) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  for (let i = 0; i < original.length; i++) {
    if (original.hasOwnProperty(i)) {
      if (!initialed) {
        accumulator = original[i];
        initialed = true;
      } else {
        accumulator = callback(accumulator, original[i], i, original);
      }
    }
  }
  return accumulator;
};

// 测试用例
const arr = [1, 2, 3, 4];
const myReduceSum = arr.myReduce((acc, num) => acc + num, 0);
console.log(myReduceSum); // 输出：10
const reduceSum = arr.reduce((acc, num) => acc + num, 0);
console.log(reduceSum); // 输出：10

// 没有initialValue的情况
const myReduceProduct = arr.myReduce((acc, num) => acc * num);
console.log(myReduceProduct); // 输出：24
const reduceProduct = arr.reduce((acc, num) => acc * num);
console.log(reduceProduct); // 输出：24

// 多空洞数组&无初始值的情况
const sparseArr = [, , 1, , 3, , 5];
const myReduceSparse = sparseArr.myReduce((acc, num) => acc + num);
console.log(myReduceSparse); // 输出：9
const reduceSparse = sparseArr.reduce((acc, num) => acc + num);
console.log(reduceSparse); // 输出：9
