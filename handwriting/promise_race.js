/**
 * 手写实现 Promise.race
 * @param {Array} promises - 一个包含多个 Promise 对象的数组
 * @returns {Promise} - 返回一个新的 Promise 对象，当第一个输入的 Promise 成功时，返回该 Promise 的结果；如果第一个输入的 Promise 失败，则返回失败的原因
 */

function promiseRace(promises) {
  // ...
}

/**
 * 要点提示：
 * 1. Promise.race 接受一个可迭代对象（通常是数组）作为参数，返回一个新的 Promise 对象，因此需要isArray检查，以及返回new Promise
 * 2. 遍历每个Promise，使用.then来处理成功与失败的情况，一旦有一个Promise成功或失败，就立即resolve或reject返回结果
 * 3. 对于空数组的情况，直接return
 * 4. 需要考虑数组中的非Promise值，使用Promise.resolve()将其转换为Promise对象来处理
 */

// 参考答案
function promiseRace(promises) {
  return new Promise((resolve, reject) => {
    if (!Array.isArray(promises)) {
      reject(new TypeError("Argument must be an array"));
    }

    for (const promise of promises) {
      Promise.resolve(promise).then(resolve, reject);
    }

    // 空数组直接return，Promise永远不会解决，不过是否显式return都无所谓，因为空数组会跳过上面的循环，最终Promise也不会被resolve或reject
  });
}
