/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-01-23 20:53:35
 * @LastEditors: RongWei
 * @LastEditTime: 2020-07-21 21:08:25
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
    if (!head) return head;

    let cur = head, prev;
    let newHead = null;
    while (cur) {
        let next = cur.next;
        if (cur.val === val) {
            cur.next = null;
            prev && (prev.next = next);
        } else {
            if (!newHead) {
                newHead = cur;
            }
            prev = cur;
        }

        cur = next;
    }
    return newHead;

    /**
     * 方法一：构造一个head
     */
    // let newHead = new ListNode();
    // newHead.next = head;
    // let cur = newHead;
    // while (cur) {
    //     if (cur.next && cur.next.val === val) {
    //         cur.next = cur.next.next;
    //     } else {
    //         cur = cur.next
    //     }
    // }
    // return newHead.next;

    /**
     * 方法二：递归
     */
    // if (!head) return head;
    // head.next = removeElements(head.next, val);
    // return head.val === val ? head.next : head;
};
// @lc code=end

