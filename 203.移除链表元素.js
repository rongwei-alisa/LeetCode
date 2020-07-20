/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-01-23 20:53:35
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-02-02 23:59:47
 */
/*
 * @lc app=leetcode.cn id=203 lang=javascript
 *
 * [203] 移除链表元素
 *
 * https://leetcode-cn.com/problems/remove-linked-list-elements/description/
 *
 * algorithms
 * Easy (43.54%)
 * Likes:    331
 * Dislikes: 0
 * Total Accepted:    54.5K
 * Total Submissions: 125.2K
 * Testcase Example:  '[1,2,6,3,4,5,6]\n6'
 *
 * 删除链表中等于给定值 val 的所有节点。
 * 
 * 示例:
 * 
 * 输入: 1->2->6->3->4->5->6, val = 6
 * 输出: 1->2->3->4->5
 * 
 * 
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
    var node = new ListNode();
    node.next = head;
    var cur = node;
    while (cur) {
        if (cur.next && cur.next.val === val) {
            cur.next = cur.next.next;
        } else {
            cur = cur.next;
        }
    }

    return node.next;
};
// @lc code=end

