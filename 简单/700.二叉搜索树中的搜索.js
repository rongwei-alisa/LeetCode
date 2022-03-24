/*
 * @Author: RongWei
 * @Date: 2022-03-24 09:46:20
 * @LastEditors: RongWei
 * @LastEditTime: 2022-03-24 09:53:35
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=700 lang=javascript
 *
 * [700] 二叉搜索树中的搜索
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
    if (!root) return null;
    while (root && root.val !== val) {
        if (root.val > val) {
            root = root.left;
        } else if (root.val < val) {
            root = root.right;
        }
    }
    return root;
};
// @lc code=end

