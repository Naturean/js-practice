/**
 * 手写实现 Promise.any
 * @param {Array} promises - 一个包含多个 Promise 对象的数组
 * @returns {Promise} - 返回一个新的 Promise 对象，当至少有一个输入的 Promise 成功时，返回第一个成功的结果；如果所有 Promise 都失败，则返回一个 AggregateError 对象，包含所有失败的原因
 */

Promise.myAny = function (promises) {
  // ...
};

/**
 * 要点提示：
 * 1. Promise.any 接受一个可迭代对象（通常是数组）作为参数，返回一个新的 Promise 对象
 * 2. 基本功能：resolve第一个成功的结果；如果所有 Promise 都失败，则reject一个 AggregateError 对象，包含所有失败的原因
 */

// 参考答案
Promise.myAny = function (promises) {
  return new Promise((resolve, reject) => {
    // 类型检查
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const reasons = new Array(promises.length);
    let rejectedCount = 0;

    if (promises.length === 0) {
      return reject(new AggregateError(reasons, "All promises were rejected"));
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        // 只要有一个Promise成功，就立即resolve
        resolve,
        // 记录失败的原因，所有Promise都被拒绝时，返回一个包含所有拒绝原因的AggregateError对象
        (reason) => {
          reasons[index] = reason;
          rejectedCount++;
          if (rejectedCount === promises.length) {
            reject(new AggregateError(reasons, "All promises were rejected"));
          }
        },
      );
    });
  });
};
