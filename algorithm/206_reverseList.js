/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    // 当前的next指向前一个
    curr.next = prev;
    // 往后遍历时，当前Node就变为前一个
    prev = curr;
    // 向后遍历
    curr = next;
  }
  // 因为curr为null才结束循环，此时head应该是前一个Node
  return prev;
};
