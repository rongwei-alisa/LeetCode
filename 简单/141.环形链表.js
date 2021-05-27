/*
 * @Author: your name
 * @Date: 2021-05-27 09:22:42
 * @LastEditTime: 2021-05-27 09:33:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/141.环形链表.js
 */
/*
 * @lc app=leetcode.cn id=141 lang=javascript
 *
 * [141] 环形链表
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
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  if (!head || !head.next) return false;
  var slow = head.next, fast = slow && slow.next;
  while (slow && fast) {
    if (fast === slow) {
      return true;
    }
    slow = slow.next;
    fast = fast.next && fast.next.next;
  }
  return false;
};
// @lc code=end

