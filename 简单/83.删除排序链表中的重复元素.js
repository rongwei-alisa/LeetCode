/*
 * @Author: your name
 * @Date: 2021-05-09 20:46:28
 * @LastEditTime: 2021-05-09 20:56:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/83.删除排序链表中的重复元素.js
 */
/*
 * @lc app=leetcode.cn id=83 lang=javascript
 *
 * [83] 删除排序链表中的重复元素
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
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function (head) {
  var node = head;
  while (node) {
    var next = node.next;
    if (next && node.val === next.val) {
      node.next = next.next;
      next.next = null;
    } else {
      node = next;
    }
  }
  return head;
};
// @lc code=end

