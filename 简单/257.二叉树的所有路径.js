/*
 * @Author: your name
 * @Date: 2021-07-07 20:41:27
 * @LastEditTime: 2021-07-08 09:38:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/257.二叉树的所有路径.js
 */
/*
 * @lc app=leetcode.cn id=257 lang=javascript
 *
 * [257] 二叉树的所有路径
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
 * @return {string[]}
 */
var binaryTreePaths = function (root) {
  // if (root === null) return [];
  // var result = [], nodeArr = [root];
  // while (nodeArr.length) {
  //   var len = nodeArr.length;
  //   while (len) {

  //   }
  // }
  // return result;


  // var node = root, result = [`${node.val}`];
  // var recursion = function (node, arr = []) {
  //   if (node === null) {
  //     return arr;
  //   }
  //   arr.push([`${node.val}`]);
  //   return recursion(node.left, arr).concat(recursion(node.right, arr));
  // }
  // if (node.left) {
  //   result
  // }
  // return recursion(node, result);
};
// @lc code=end

