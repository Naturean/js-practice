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
 * 3. empty values（即稀疏数组中的空位）需要保留，既不能忽略，也不能填充为 undefined。
 */

// 参考答案
Array.prototype.myMap = function (callback, thisArg) {
  // 类型检查
  if (typeof callback !== "function") {
    throw new TypeError(`${callback} is not a function`);
  }

  const arr = Object(this);
  const res = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (i in arr) {
      res[i] = callback.call(thisArg, arr[i], i, arr);
    }
  }
  return res;
};

/**
 * 测试用例
 */

// 空数组
const arr1 = [];
console.log(arr1.myMap((x) => x * 2)); // []
console.log(arr1.map((x) => x * 2)); // []

// 普通数组
const arr2 = [1, 2, 3];
console.log(arr2.myMap((x) => x * 2)); // [2, 4, 6]
console.log(arr2.map((x) => x * 2)); // [2, 4, 6]

// 稀疏数组
const arr3 = [1, , 3];
console.log(arr3.myMap((x) => x * 2)); // [2, <1 empty item>, 6]
console.log(arr3.map((x) => x * 2)); // [2, <1 empty item>, 6]

// thisArg
const arr4 = [1, 2, 3];
const obj = { factor: 10 };
console.log(
  arr4.myMap(function (x) {
    return x * this.factor;
  }, obj),
); // [10, 20, 30]
console.log(
  arr4.map(function (x) {
    return x * this.factor;
  }, obj),
); // [10, 20, 30]

// 嵌套数组
const arr5 = [
  [1, 2],
  [3, 4],
];
console.log(arr5.myMap((x) => x.map((y) => y * 2))); // [[2, 4], [6, 8]]
console.log(arr5.map((x) => x.map((y) => y * 2))); // [[2, 4], [6, 8]]

// 类型检查，输出不用完全一致，正确抛出错误即可
try {
  arr2.myMap("not a function");
} catch (e) {
  console.log(e.message); // not a function is not a function
}
try {
  arr2.map("not a function");
} catch (e) {
  console.log(e.message); // string "not a function" is not a function
}
