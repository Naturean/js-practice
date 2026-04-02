/**
 * 实现字符串去重
 */

// 基本实现，利用哈希去重
function deduplicateString(str) {
  const seen = new Set();
  let res = "";
  for (const c of str) {
    if (!seen.has(c)) {
      seen.add(c);
      res += c;
    }
  }
  return res;
}

// 包括双码元字符（如emoji）的测试用例
console.log(deduplicateString("hello world😀")); // 输出: 'helo wrd😀'

// 或者更简便的方法，new Set可接受可迭代对象（包括字符串），因此无需手写
// 注意new Set(str)也可以写为new Set(Array.from(str))等，但str.split("")不适用于emoji等占两个码元的情况
function deduplicateString(str) {
  return [...new Set(str)].join("");
}

console.log(deduplicateString("hello world😀")); // 输出: 'helo wrd😀'
