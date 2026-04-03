/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  // 如果存在有限环，那么一直遍历总是会遇到重复节点
  // 但不可能把所有遇到的节点记住，因此需要“快慢指针”
  // 如果在一条直线赛道，那么跑得快的人总是不会碰到跑得慢的人
  // 但对于环形赛道，前者可能超过后者整整一圈，进而碰面
  let slow = (fast = head);
  // 如果快指针（及next）为null，说明有尽头，不存在环
  while (fast && fast.next) {
    // 跑2步
    fast = fast.next.next;
    // 跑1步
    slow = slow.next;
    // 如果碰面
    if (fast === slow) {
      return true;
    }
  }
  return false;
};
