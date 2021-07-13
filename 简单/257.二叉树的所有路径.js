/*
 * @Author: your name
 * @Date: 2021-07-07 20:41:27
 * @LastEditTime: 2021-07-13 20:43:55
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
// 深度优先
var binaryTreePaths = function (root) {
  var paths = [];
  var constructPaths = function (node, path) {
    if (node) {
      path += node.val;
      if (node.left === null && node.right === null) {
        paths.push(path);
      } else {
        path += '->';
        constructPaths(node.left, path);
        constructPaths(node.right, path);
      }
    }
  }
  constructPaths(root, '');
  return paths;
};

// 广度优先
var binaryTreePaths = function (root) {
  if (root === null) return [];
  var paths = [], nodeArr = [root], pathArr = [`${root.val}`];
  while (nodeArr.length) {
    var node = nodeArr.shift(), path = pathArr.shift();
    if (node.left === null && node.right === null) {
      paths.push(path);
    } else {
      path += '->';
      if (node.left) {
        nodeArr.push(node.left);
        pathArr.push(path + node.left.val);
      }
      if (node.right) {
        nodeArr.push(node.right);
        pathArr.push(path + node.right.val);
      }
    }
  }
  return paths;
}
// @lc code=end

