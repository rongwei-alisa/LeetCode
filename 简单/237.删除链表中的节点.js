/*
 * @Author: your name
 * @Date: 2021-07-05 17:37:52
 * @LastEditTime: 2021-07-05 21:39:08
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/237.删除链表中的节点.js
 */
/*
 * @lc app=leetcode.cn id=237 lang=javascript
 *
 * [237] 删除链表中的节点
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
 * @param {ListNode} node
 * @return {void} Do not return anything, modify node in-place instead.
 */
var deleteNode = function (node) {
  node.val = node.next.val;
  node.next = node.next.next;
};
// @lc code=end

