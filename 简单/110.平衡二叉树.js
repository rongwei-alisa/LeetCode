/*
 * @Author: your name
 * @Date: 2021-05-14 12:00:50
 * @LastEditTime: 2021-05-16 21:36:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/110.平衡二叉树.js
 */
/*
 * @lc app=leetcode.cn id=110 lang=javascript
 *
 * [110] 平衡二叉树
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
 * @return {boolean}
 */
var isBalanced = function (root) {
  var getHeight = function (node) {
    if (node === null) {
      return 0;
    }
    return Math.max(getHeight(node.left), getHeight(node.right)) + 1;
  };
  if (root === null) {
    return true;
  }
  return Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1
    && isBalanced(root.left) && isBalanced(root.right);
};
// @lc code=end

