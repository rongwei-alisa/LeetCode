/*
 * @Author: your name
 * @Date: 2021-05-31 09:20:43
 * @LastEditTime: 2021-05-31 20:58:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/145.二叉树的后序遍历.js
 */
/*
 * @lc app=leetcode.cn id=145 lang=javascript
 *
 * [145] 二叉树的后序遍历
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
 * @return {number[]}
 */
// 递归
// var postorderTraversal = function (root) {
//   var res = [], node = root;
//   var postorder = function (node) {
//     if (node === null) return;
//     postorder(node.left);
//     postorder(node.right);
//     res.push(node.val);
//   };
//   postorder(node);
//   return res;
// };

// 迭代
var postorderTraversal = function (root) {
  var stack = [], res = [], node = root;
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      node = node.left;
    }
    var cur = stack.pop();
    node = cur.right;
    if (node === null) {
      res.push(cur.val);
    } else {
      cur.right = null;
      stack.push(cur);
    }
  }
  return res;
};
// @lc code=end

