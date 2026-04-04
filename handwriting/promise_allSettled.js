/**
 * 手写实现 Promise.allSettled
 * @param {Array} promises - 一个包含多个 Promise 对象的数组
 * @returns {Promise} - 返回一个新的 Promise 对象，当所有输入的 Promise 都完成（无论成功还是失败）时，返回一个包含所有结果的数组，每个结果是一个对象，表示对应 Promise 的状态和结果
 */

Promise.myAllSettled = function (promises) {
  // ...
};

/**
 * 要点提示：
 * 1. Promise.allSettled 接受一个可迭代对象（通常是数组）作为参数，返回一个新的 Promise 对象
 * 2. 基本功能：无论成功与否，都等待所有Promise完成，并返回一个包含所有结果的数组
 * 3. 每个结果是一个对象，包含对应 Promise 的状态和结果（status, value/reason）
 * 4. status: "fulfilled"表示成功，"rejected"表示失败；value表示成功的结果，reason表示失败的原因
 */

// 参考答案
Promise.myAllSettled = function (promises) {
  return new Promise((resolve, reject) => {
    // 类型检查
    if (!Array.isArray(promises)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = new Array(promises.length);
    let settledCount = 0;

    if (promises.length === 0) {
      resolve(results);
    }

    promises.forEach((promise, index) => {
      Promise.resolve(promise).then(
        (value) => {
          results[index] = { status: "fulfilled", value };
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        },
        (reason) => {
          results[index] = { status: "rejected", reason };
          settledCount++;
          if (settledCount === promises.length) {
            resolve(results);
          }
        },
      );
    });
  });
};
