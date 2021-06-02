/*
 * @Author: your name
 * @Date: 2021-06-02 09:36:54
 * @LastEditTime: 2021-06-02 13:59:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/160.相交链表.js
 */
/*
 * @lc app=leetcode.cn id=160 lang=javascript
 *
 * [160] 相交链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  var nodeA = headA, nodeB = headB, lenA = 0, lenB = 0;
  // 先遍历一边链表，分别存下两个链表的长度
  while (nodeA || nodeB) {
    if (nodeA) {
      lenA++;
      nodeA = nodeA.next
    }
    if (nodeB) {
      lenB++;
      nodeB = nodeB.next;
    }
  }
  // 找出较长的链表，并将该链表的遍历起始节点指向可以使两个链表同时遍历结束的一个节点
  nodeA = headA;
  nodeB = headB;
  var i = 0;
  if (lenB > lenA) {
    while (i < lenB - lenA) {
      nodeB = nodeB.next;
      i++;
    }
  } else if (lenA > lenB) {
    while (i < lenA - lenB) {
      nodeA = nodeA.next;
      i++;
    }
  }
  // 同时遍历两个链表，当两个节点相同时，便是相交的起始节点
  while (nodeA) {
    if (nodeA === nodeB) {
      return nodeA;
    }
    nodeA = nodeA.next;
    nodeB = nodeB.next;
  }
  return null;
};
// @lc code=end

