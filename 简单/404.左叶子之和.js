/*
 * @Author: your name
 * @Date: 2021-08-09 12:01:56
 * @LastEditTime: 2021-08-09 19:52:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/404.左叶子之和.js
 */
/*
 * @lc app=leetcode.cn id=404 lang=javascript
 *
 * [404] 左叶子之和
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
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root === null) return 0;
  var sum = 0;
  var loop = function (node, type) {
    if (node === null) return;
    if (type === 'left' && node.left === null && node.right === null) {
      sum += node.val;
    } else {
      if (node.left) {
        loop(node.left, 'left');
      }
      if (node.right) {
        loop(node.right, 'right');
      }
    }
  }

  loop(root);
  return sum;
};
// @lc code=end

