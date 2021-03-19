/*
 * @Author: your name
 * @Date: 2021-03-19 17:13:22
 * @LastEditTime: 2021-03-19 22:23:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/21.合并两个有序链表.js
 */
/*
 * @lc app=leetcode.cn id=21 lang=javascript
 *
 * [21] 合并两个有序链表
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
var mergeTwoLists = function (l1, l2) {
	if (!l1 && !l2) return l1;

	var l3 = new ListNode(), head, hasHead = false;
	while (l1 || l2) {
		if (!l1 || !l2) {
			l3.next = l1 || l2;
			l1 = null;
			l2 = null;
		} else {
			if (l1.val <= l2.val) {
				l3.next = l1;
				l1 = l1.next;
			} else {
				l3.next = l2;
				l2 = l2.next
			}
		}
		if (!hasHead) {
			head = l3.next;
			hasHead = true;
		}
		l3 = l3.next;
	}
	return head;
};
// @lc code=end

