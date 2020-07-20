/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-02-02 08:58:33
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-02-02 10:19:20
 */
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
 *
 * https://leetcode-cn.com/problems/binary-tree-postorder-traversal/description/
 *
 * algorithms
 * Hard (69.67%)
 * Likes:    215
 * Dislikes: 0
 * Total Accepted:    47.3K
 * Total Submissions: 67.8K
 * Testcase Example:  '[1,null,2,3]'
 *
 * 给定一个二叉树，返回它的 后序 遍历。
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
 * 输出: [3,2,1]
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
var postorderTraversal = function (root, arr = []) {
    // 递归
    // if (root) {
    //     postorderTraversal(root.left, arr);
    //     postorderTraversal(root.right, arr);
    //     arr.push(root.val);
    // }
    // return arr;

    // 迭代
    let result = [],
        stack = [],
        cur = root;
    while (cur || stack.length) {
        while (cur) {
            stack.push(cur);
            cur = cur.left;
        }
        let node = stack.pop();
        cur = node.right;
        if (!cur) {
            result.push(node.val);
        } else {
            node.right = null;
            stack.push(node);
        }
    }
    return result;
};
// @lc code=end

