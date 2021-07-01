/*
 * @Author: your name
 * @Date: 2021-07-01 09:31:16
 * @LastEditTime: 2021-07-01 09:40:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/234.回文链表.js
 */
/*
 * @lc app=leetcode.cn id=234 lang=javascript
 *
 * [234] 回文链表
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
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let str = '', reverseStr = '';
  while (head) {
    str += head.val;
    reverseStr = head.val + reverseStr;
    head = head.next;
  }
  return str === reverseStr;
};
// @lc code=end

