/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const seen = new Set();
  let curr = head;
  while (curr !== null) {
    if (seen.has(curr)) {
      return curr;
    }
    seen.add(curr);
    curr = curr.next;
  }
  return null;
};

/**
 * 142. 环形链表 II
 * https://leetcode.cn/problems/linked-list-cycle-ii/
 *
 * 哈希表记录访问过的节点，第一次访问到已经访问过的节点时说明找到了入口节点
 */

/**
 * 进阶：O(1)空间复杂度的解法
 *
 * 在“141. 环形链表”中，我们使用快慢指针来判断链表是否有环，如果有环，快慢指针一定会在某个节点相遇。
 * 现在的进阶解法依然是基于快慢指针的思想，但同时基于一个被证明过的结论：
 * “当快慢指针在环中相遇后，将其中一个指针重新指向链表头部，然后两个指针以相同的速度（每次移动一步）前进，它们再次相遇的节点就是环的入口节点。”
 */
var detectCycle = function (head) {
  let slow = head;
  let fast = head;
  while (fast !== null && fast.next !== null) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      // 证明有环，寻找入口节点
      // 这里将slow指针重新指向链表头部，fast指针保持在相遇节点，然后两个指针以相同的速度前进
      slow = head;
      while (slow !== fast) {
        slow = slow.next;
        fast = fast.next;
      }
      return slow;
    }
  }
  return null;
};
