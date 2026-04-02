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
 * 2. flat 方法会在遍历时跳过稀疏数组中的空位
 */

// 参考实现
Array.prototype.myFlat = function (depth = 1) {
  const arr = Object(this);
  const res = [];
  for (let i = 0; i < arr.length; i++) {
    // 跳过稀疏数组中的空位
    if (!(i in arr)) continue;
    if (Array.isArray(arr[i]) && depth > 0) {
      // 如果是数组，且此时深度大于0（即需要展平），通过递归展平
      res.push(...arr[i].myFlat(depth - 1));
    } else {
      // 否则直接添加到结果
      res.push(arr[i]);
    }
  }
  return res;
};

/**
 * 测试用例
 */

// 空数组
const arr1 = [];
console.log(arr1.myFlat()); // []
console.log(arr1.flat()); // []

// 一维数组
const arr2 = [1, 2, 3];
console.log(arr2.myFlat()); // [1, 2, 3]
console.log(arr2.flat()); // [1, 2, 3]

// 二维数组
const arr3 = [1, [2, 3], 4];
console.log(arr3.myFlat()); // [1, 2, 3, 4]
console.log(arr3.flat()); // [1, 2, 3, 4]

// 三维数组
const arr4 = [1, [2, [3, 4]], 5];
console.log(arr4.myFlat()); // [1, 2, [3, 4], 5]
console.log(arr4.flat()); // [1, 2, [3, 4], 5]

// 无限嵌套数组
const arr5 = [1, [2, [3, [4, 5]]]];
console.log(arr5.myFlat(Infinity)); // [1, 2, 3, 4, 5]
console.log(arr5.flat(Infinity)); // [1, 2, 3, 4, 5]

// 稀疏数组
const arr6 = [1, , 3, [4, , 5]];
console.log(arr6.myFlat()); // [1, 3, 4, 5]
console.log(arr6.flat()); // [1, 3, 4, 5]

// 非数组元素
const arr7 = [1, "a", [2, "b"], { key: "value" }];
console.log(arr7.myFlat()); // [1, 'a', 2, 'b', { key: 'value' }]
console.log(arr7.flat()); // [1, 'a', 2, 'b', { key: 'value' }]

// 负数深度
const arr8 = [1, [2, 3], 4];
console.log(arr8.myFlat(-1)); // [1, [2, 3], 4]
console.log(arr8.flat(-1)); // [1, [2, 3], 4]

// 更深的稀疏嵌套数组
const arr9 = [1, , [2, , [3, , 0, 4, false, null, undefined]], 5];
console.log(arr9.myFlat(2)); // [1, 2, 3, 0, 4, false, null, undefined, 5]
console.log(arr9.flat(2)); // [1, 2, 3, 0, 4, false, null, undefined, 5]

// 嵌套稀疏数组 + 小于等于0的深度
const arr10 = [1, , 3, [4, , 5]];
console.log(arr10.myFlat(0)); // [1, 3, [4, , 5]]
console.log(arr10.flat(0)); // [1, 3, [4, , 5]]

// 更多其他可迭代对象
const set1 = new Set([1, [2, 3], 4]);
console.log(Array.prototype.myFlat.call(set1)); // []
console.log(Array.prototype.flat.call(set1)); // []

const map1 = new Map([
  [1, "a"],
  [2, "b"],
]);
console.log(Array.prototype.myFlat.call(map1)); // []
console.log(Array.prototype.flat.call(map1)); // []

// Set和Map不是类数组对象，因此不存在length属性
console.log(Object(set1)); // Set(3) { 1, [ 2, 3 ], 4 }
console.log(Object(map1)); // Map(2) { 1 => 'a', 2 => 'b' }
console.log(Object(set1).length); // undefined
console.log(Object(map1).length); // undefined
// 而i和length的比较会因此变为false，导致循环无法进入，最终返回空数组
console.log(0 < undefined); // false

const str1 = "abc";
console.log(Array.prototype.myFlat.call(str1)); // ['a', 'b', 'c']
console.log(Array.prototype.flat.call(str1)); // ['a', 'b', 'c']

// 字符串为类数组对象，存在length属性，因此可以遍历
// 但字符串中的元素不是数组，因此无法展平，直接返回原字符串的字符数组形式
console.log(Object(str1)); // [String: 'abc']
console.log(Object(str1).length); // 3

// 手动实现一个类数组对象
const obj1 = { 0: "a", 1: "b", 2: { 0: "c", 1: "d", length: 2 }, length: 3 };
console.log(Array.prototype.myFlat.call(obj1)); // ['a', 'b', { 0: 'c', 1: 'd', length: 2 }]
console.log(Array.prototype.flat.call(obj1)); // ['a', 'b', { 0: 'c', 1: 'd', length: 2 }]

// 由于 obj1[2] 是一个对象而非数组，因此不会进入递归分支，直接被当作普通元素添加到结果中
console.log(Array.isArray(obj1[2])); // false
