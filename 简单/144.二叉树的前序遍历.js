/*
 * @Author: your name
 * @Date: 2021-05-28 09:34:04
 * @LastEditTime: 2021-05-29 21:29:55
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/144.二叉树的前序遍历.js
 */
/*
 * @lc app=leetcode.cn id=144 lang=javascript
 *
 * [144] 二叉树的前序遍历
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

// var preorderTraversal = function (root) {
// 递归1
// if (root === null) {
//   return [];
// }
// var arr = [];
// var traverse = function (node) {
//   arr.push(node.val);
//   if (node.left) {
//     traverse(node.left);
//   }
//   if (node.right) {
//     traverse(node.right);
//   }
// };
// traverse(root);
// return arr;

// 递归2
//   var preorder = function (node, res) {
//     if (node === null) {
//       return;
//     }
//     res.push(node.val);
//     preorder(node.left, res);
//     preorder(node.right, res);
//   };
//   var arr = [];
//   preorder(root, arr);
//   return arr;
// };

// 迭代
var preorderTraversal = function (root) {
  if (root === null) {
    return [];
  }
  var stack = [], node = root, res = [];
  while (stack.length || node) {
    while (node) {
      stack.push(node);
      res.push(node.val);
      node = node.left;
    }
    node = stack.pop();
    node = node.right;
  }
  return res;
};
// @lc code=end

