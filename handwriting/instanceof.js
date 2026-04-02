/**
 * 手写实现 instanceof
 */

function myInstanceof(obj, constructor) {
  // ...
}

/**
 * 要点提示：
 * 1. instanceof 基本功能是判断一个对象是否是一个构造函数的实例，原理是沿着原型链向上查找。
 * 2. 参数检查：需要确保obj是一个非基本类型的对象，constructor是一个函数。
 */

// 参考答案
function myInstanceof(obj, constructor) {
  // 确保constructor是一个函数，且具有prototype属性
  if (typeof constructor !== "function" || !constructor.prototype) {
    throw new TypeError("Right-hand side of 'instanceof' is not callable");
  }

  // 确保obj不为基本类型，而是对象
  // 因为typeof null === 'object'，所以null需要单独判断
  // 同理，由于typeof Function === 'function'，所以typeof obj === 'function'的情况需要放行
  if (obj === null || (typeof obj !== "object" && typeof obj !== "function")) {
    return false;
  }

  let proto = Object.getPrototypeOf(obj);
  const prototype = constructor.prototype;

  while (proto !== null) {
    if (proto === prototype) {
      return true;
    }
    proto = Object.getPrototypeOf(proto);
  }

  return false;
}
