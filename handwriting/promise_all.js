/**
 * 手写实现 Promise.all
 * @param {Array} promises - 一个包含多个 Promise 对象的数组
 * @returns {Promise} - 返回一个新的 Promise 对象，当所有输入的 Promise 都成功时，返回一个包含所有结果的数组；如果有任何一个 Promise 失败，则返回失败的原因
 */

Promise.myAll = function (values) {
  // ...
};

/**
 * 要点提示：
 * 1. Promise.all 接受一个可迭代对象（通常是数组）作为参数，返回一个新的 Promise 对象，因此需要isArray检查，以及返回new Promise
 * 2. 需要一个数组收集所有Promise的结果，并遍历每个Promise，使用.then来处理成功与失败的情况
 * 3. 由于Promise是异步的，因此需要一个计数器来跟踪已经成功的Promise数量，在.then当中判断：若所有Promise都成功，则返回结果数组
 * 4. 对于空数组的情况，需要特殊处理，直接resolve(results)
 * 5. 需要考虑数组中的非Promise值，使用Promise.resolve()将其转换为Promise对象来处理
 */

// 参考答案
Promise.myAll = function (values) {
  return new Promise((resolve, reject) => {
    // 类型检查
    if (!Array.isArray(values)) {
      return reject(new TypeError("Argument must be an array"));
    }

    const results = new Array(values.length);
    let resolvedCount = 0;

    if (values.length === 0) {
      resolve(results);
    }

    values.forEach((value, index) => {
      Promise.resolve(value).then((result) => {
        results[index] = result;
        resolvedCount++;
        if (resolvedCount === values.length) {
          resolve(results);
        }
      }, reject);
    });
  });
};
