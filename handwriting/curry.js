/**
 * 手写实现柯里化函数（Currying）
 */

function curry(fn) {
  // ...
}

/**
 * 实现要点：柯里化函数接收参数时，分两种情况：
 * 1. 接收参数数量充足时，执行原函数功能
 * 2. 接收参数数量不足时，返回接收剩余参数的函数，调用该函数时重复1、2
 */

// 参考实现：
function curry(fn) {
  // 返回一个函数，该函数为柯里化函数
  return function curried(...args) {
    // 1. 接收参数数量充足时，执行原函数功能
    if (args.length >= fn.length) {
      return fn(...args);
    } else {
      // 2. 接收参数数量不足时，返回接收剩余参数的函数，该函数也拥有柯里化能力（即重复1、2）
      return function (...newArgs) {
        // 因为重复1、2，实际上就是追加参数后重新调用curried函数
        return curried(...args, ...newArgs);
      };
    }
  };
}

// 测试用例
function add(a, b, c) {
  return a + b + c;
}
const curriedAdd = curry(add);
console.log(curriedAdd(1)(2)(3)); // 6
console.log(curriedAdd(1, 2)(3)); // 6
console.log(curriedAdd(1)(2, 3)); // 6
console.log(curriedAdd(1, 2, 3)); // 6
