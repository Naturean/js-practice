/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
// 两次遍历解法
var removeNthFromEnd = function (head, n) {
  // 第一次遍历：计算size
  let curr = head;
  let size = 0;
  while (curr) {
    size++;
    curr = curr.next;
  }

  // 第二次遍历：找到要删除的节点，记录prev
  let prev = null;
  curr = head;
  for (let i = 0; i < size - n; i++) {
    prev = curr;
    curr = curr.next;
  }
  // 如果有prev，说明不是head，把prev连到next
  if (prev) {
    prev.next = curr.next;
  }
  // 如果没有prev，说明是head，head向后移动，相当于删除了curr
  if (!prev) {
    head = head.next;
  }
  // 断开curr连接
  curr.next = null;

  return head;
};

// 进阶：一次遍历，双指针
// 核心思想：快指针先走n + 1步，然后快慢指针一起走，直到快指针到达末尾，此时慢指针正好在要删除的节点的前一个节点上
// 本质问题：如何在一次遍历中找到倒数第N个节点？
var removeNthFromEnd = function (head, n) {
  // 考虑删除头节点的情况，使用dummy节点简化边界条件
  let dummy = new ListNode(0, head);
  let slow = (fast = dummy);
  // 快指针先走n + 1步
  for (let i = 0; i < n + 1; i++) {
    fast = fast.next;
  }
  // 快慢指针一起走，直到快指针到达末尾（null）
  while (fast) {
    slow = slow.next;
    fast = fast.next;
  }
  // 慢指针的下一个节点就是要删除的节点
  slow.next = slow.next.next;
  return dummy.next;
};
