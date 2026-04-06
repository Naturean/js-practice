/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
  const directions = [
    [0, 1],
    [1, 0],
    [0, -1],
    [-1, 0],
  ];

  const m = board.length;
  const n = board[0].length;

  const visited = new Array(m);
  for (let i = 0; i < visited.length; i++) {
    visited[i] = new Array(n).fill(false);
  }

  const path = [];
  const backtrace = (i, j) => {
    // 出界
    if (i < 0 || i >= m || j < 0 || j >= n) {
      return;
    }
    // 重复
    if (visited[i][j]) {
      return;
    }
    // 字符不同
    if (board[i][j] !== word[path.length]) {
      return;
    }

    path.push(board[i][j]);
    // 一致
    if (path.length === word.length) {
      return true;
    }
    // 继续探查
    visited[i][j] = true;
    for (const [x, y] of directions) {
      if (backtrace(i + x, j + y)) {
        return true;
      }
    }
    visited[i][j] = false;
    path.pop();
  };
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (backtrace(i, j)) {
        return true;
      }
    }
  }
  return false;
};
