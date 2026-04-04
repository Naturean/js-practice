/**
 * 手写实现深拷贝
 */

function deepClone(target, hash = new WeakMap()) {
  // ...
}

/**
 * 实现要点：
 * 1. 处理基本类型和函数
 * 2. 处理特殊对象，如Date、RegExp、Map、Set
 * 3. 处理循环引用
 * 4. 处理数组和普通对象
 *
 * 注意：
 * 1. 递归处理前需要使用WeakMap记录已经处理过或正在处理的对象，避免循环引用
 * 2. 普通对象clone时需要保持原型链
 * 3. Map的key也可能是对象
 */

// 参考实现：
function deepClone(target, hash = new WeakMap()) {
  // 基本类型和函数直接返回
  if (target === null || typeof target !== "object") {
    return target;
  }

  // 特殊对象
  if (target instanceof Date) {
    return new Date(target);
  }
  if (target instanceof RegExp) {
    return new RegExp(target.source, target.flags);
  }
  if (target instanceof Map) {
    const map = new Map();
    hash.set(target, map);
    for (const [key, value] of target) {
      map.set(deepClone(key, hash), deepClone(value, hash));
    }
    return map;
  }
  if (target instanceof Set) {
    const set = new Set();
    hash.set(target, set);
    for (const value of target) {
      set.add(deepClone(value, hash));
    }
    return set;
  }

  // 处理循环引用
  if (hash.has(target)) {
    return hash.get(target);
  }

  // 处理数组和普通对象
  const isArray = Array.isArray(target);
  const clone = isArray ? [] : Object.create(Object.getPrototypeOf(target)); // 使用Object.create保持原型链，避免丢失原型方法
  hash.set(target, clone);

  const keys = Reflect.ownKeys(target); // Reflect.ownKeys可以获取对象的所有属性，包括不可枚举和Symbol属性
  for (const key of keys) {
    clone[key] = deepClone(target[key], hash);
  }

  return clone;
}
