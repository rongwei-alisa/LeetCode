/*
 * @Author: RongWei
 * @Date: 2021-10-11 14:03:44
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-11 14:35:22
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=2 lang=javascript
 *
 * [2] 两数相加
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let remainder = 0, lastSum = 0;
  let head, l3, node;
  while (l1 || l2) {
    let num1 = 0, num2 = 0;
    if (l1) {
      num1 = l1.val;
      l1 = l1.next;
    }
    if (l2) {
      num2 = l2.val;
      l2 = l2.next;
    }
    lastSum = num1 + num2 + lastSum;

    remainder = lastSum % 10;
    lastSum = parseInt(lastSum / 10);

    node = new ListNode(remainder);
    if (!head) {
      head = node;
      l3 = head;
    } else {
      l3.next = node;
      l3 = l3.next
    }
  }
  if (lastSum) {
    node = new ListNode(lastSum);
    l3.next = node;
  }
  return head;
};
// @lc code=end

