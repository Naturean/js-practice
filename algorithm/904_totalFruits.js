/**
 * @param {number[]} fruits
 * @return {number}
 */
var totalFruit = function (fruits) {
  const seen = new Map();
  let slow = 0;
  let max = 0;
  for (let fast = 0; fast < fruits.length; fast++) {
    // 如果发现第三种水果，跳到只剩两种水果的情况，重新计算
    if (!seen.has(fruits[fast]) && seen.size === 2) {
      // 只剩两种的情况即当前水果和上一个水果
      const typeToDelete = (() => {
        const reserved = fruits[fast - 1];
        // 这里向前遍历去找剩下的那个水果
        for (let i = fast - 2; i >= 0; i--) {
          if (fruits[i] !== reserved) {
            return fruits[i];
          }
        }
      })();
      slow = seen.get(typeToDelete);
      seen.delete(typeToDelete);
    }
    // 跳转表记录剔除该水果时，左边界的值
    seen.set(fruits[fast], fast + 1);
    max = Math.max(fast - slow + 1, max);
  }
  return max;
};

// 测试用例
console.log(totalFruit([1, 0, 1, 4, 1, 4, 1, 2, 3]));
