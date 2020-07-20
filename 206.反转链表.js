/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-01-23 18:30:11
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-01-23 19:08:10
 */
/*
 * @lc app=leetcode.cn id=206 lang=javascript
 *
 * [206] 反转链表
 *
 * https://leetcode-cn.com/problems/reverse-linked-list/description/
 *
 * algorithms
 * Easy (66.50%)
 * Likes:    738
 * Dislikes: 0
 * Total Accepted:    145.3K
 * Total Submissions: 218.6K
 * Testcase Example:  '[1,2,3,4,5]'
 *
 * 反转一个单链表。
 * 
 * 示例:
 * 
 * 输入: 1->2->3->4->5->NULL
 * 输出: 5->4->3->2->1->NULL
 * 
 * 进阶:
 * 你可以迭代或递归地反转链表。你能否用两种方法解决这道题？
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
 * @return {ListNode}
 */
var reverseList = function (head) {
    if (!head) return head;
    var node = head;
    var nodeList = [], newHead, lastNode;
    do {
        nodeList.unshift(node.val);
        node = node.next;
    } while (node)
    for (var i = 0; i < nodeList.length; i += 1) {
        var node = new ListNode(nodeList[i]);
        lastNode && (lastNode.next = node);
        lastNode = node;
        if (i === 0) {
            newHead = node;
        }
    }
    return newHead;
};
// @lc code=end

