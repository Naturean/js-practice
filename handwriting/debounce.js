/**
 * 手写实现防抖（debounce）和节流（throttle）函数
 * 防抖：在事件被触发n秒后才执行回调，如果在这n秒内又被触发，则重新计时。
 * 节流：规定在一个单位时间内，只能触发一次函数。如果这个单位时间内触发多次函数，只有一次生效。
 */

function debounce(func, wait) {
  // ...
}

function throttle(func, wait) {
  // ...
}

/**
 * 实现要点：
 * 1. 防抖：使用setTimeout来延迟函数的执行，每次触发事件时清除之前的定时器，重新设置一个新的定时器。
 * 2. 节流：使用一个变量记录上次函数执行的时间，每次触发事件时判断当前时间与上次执行时间的差值，如果超过指定的等待时间，则执行函数并更新上次执行时间。
 * 3. 考虑this指向问题
 */

// 参考实现
function debounce(func, wait) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => {
      func.apply(this, ...args);
    }, wait);
  };
}

function throttle(func, wait) {
  let last = 0;
  return function (...args) {
    if (Date.now() - last > wait) {
      func.apply(this, ...args);
      last = Date.now();
    }
  };
}

// debounce的首次执行并非立刻，如下是一个改进版本，支持立即执行和延迟执行两种模式：
function debounce(func, wait, immediate) {
  let timeoutId;
  return function (...args) {
    clearTimeout(timeoutId);
    if (immediate && !timeoutId) {
      func.apply(this, ...args);
    }
    timeoutId = setTimeout(() => {
      timeoutId = null;
      if (!immediate) {
        func.apply(this, ...args);
      }
    }, wait);
  };
}
