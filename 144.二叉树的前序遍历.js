/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-02-02 08:51:01
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-02-02 09:30:49
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-preorder-traversal/description/
 *
 * algorithms
 * Medium (63.55%)
 * Likes:    197
 * Dislikes: 0
 * Total Accepted:    63.4K
 * Total Submissions: 99.5K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 前序 遍历。
 * 
 * 示例:
 * 
 * 输入: [1,null,2,3]  
 * ⁠  1
 * ⁠   \
 * ⁠    2
 * ⁠   /
 * ⁠  3 
 * 
 * 输出: [1,2,3]
 * 
 * 
 * 进阶: 递归算法很简单，你可以通过迭代算法完成吗？
 * 
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function (root, arr = []) {
    // 递归
    // if (root) {
    //     arr.push(root.val);
    //     preorderTraversal(root.left, arr);
    //     preorderTraversal(root.right, arr);
    // }
    // return arr;

    // 迭代
    let result = [],
        stack = [],
        cur = root;
    while (cur || stack.length) {
        while (cur) {
            result.push(cur.val);
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        cur = node.right;
    }
    return result;
};
// @lc code=end

