/**
 * 手写实现 call、apply、bind
 */

// call
Function.prototype.myCall = function (context, ...args) {
  // ...
};

// apply
Function.prototype.myApply = function (context, args) {
  // ...
};

// bind
Function.prototype.myBind = function (context, ...args) {
  // ...
};

/**
 * 要点提示：
 * 1. call、apply和bind都是实现函数调用时改变this指向的方法，原理是将函数作为对象的临时属性来调用。
 * 2. call和apply的区别在于传递参数的方式，call是逐个传递参数，而apply是将参数放在一个数组中传递。
 * 3. bind方法返回一个新的函数，绑定了指定的this值和初始参数，可以在调用时继续传递参数。
 * 4. 临时属性的命名可以使用Symbol来避免冲突。
 * 5. 记得删除临时属性。
 * 6. 对于bind方法，还需要考虑使用new调用的情况。
 */

// 参考答案
Function.prototype.myCall = function (context, ...args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...args);
  delete context[fnSymbol];
  return result;
};

Function.prototype.myApply = function (context, args) {
  context = context || globalThis;
  const fnSymbol = Symbol();
  context[fnSymbol] = this;
  const result = context[fnSymbol](...(args || []));
  delete context[fnSymbol];
  return result;
};

Function.prototype.myBind = function (context, ...bindArgs) {
  const fn = this;
  return function bound(...callArgs) {
    const args = [...bindArgs, ...callArgs];

    // 对new的情况特殊处理
    if (new.target && new.target === bound) {
      return new fn(...args);
    }

    return fn.apply(context, args);
  };
};
