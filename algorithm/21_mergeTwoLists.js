/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {
  // 如果其中一个链表为空，直接返回另一个链表
  if (list1 === null || list2 === null) {
    return list1 ? list1 : list2;
  }

  // 保证list1的头结点值较小，这样就可以直接在list1上进行合并
  if (list1.val > list2.val) {
    [list1, list2] = [list2, list1];
  }

  // 记录合并后的链表头结点
  const head = list1;
  while (list1.next && list2) {
    // 与list1.next比较，因为需要将list2插入到list1和list1.next之间
    if (list2.val < list1.next.val) {
      const next1 = list1.next;
      const next2 = list2.next;
      list1.next = list2;
      list2.next = next1;
      list2 = next2;
    }
    // 向后遍历list1，包括刚插入的节点，确保连续插入的情况
    list1 = list1.next;
  }

  // 如果list2还有剩余，说明list1最大值也小于list2后续的值，直接插入末尾
  // 如果list2已经遍历完，那么list1后续的值也能确保顺序，不需要调整
  if (list2) {
    list1.next = list2;
  }

  return head;
};
