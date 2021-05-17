/*
 * @Author: your name
 * @Date: 2021-05-17 18:32:04
 * @LastEditTime: 2021-05-17 19:56:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/111.二叉树的最小深度.js
 */
/*
 * @lc app=leetcode.cn id=111 lang=javascript
 *
 * [111] 二叉树的最小深度
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
// 递归
var minDepth = function (root) {
  var getHeight = function (node) {
    if (node === null) {
      return 0
    }
    if (node.left === null && node.right === null) {
      return 1;
    }
    if (node.left === null) {
      return getHeight(node.right) + 1;
    }
    if (node.right === null) {
      return getHeight(node.left) + 1;
    }
    return Math.min(1 + getHeight(node.left), 1 + getHeight(node.right));
  };
  return getHeight(root);
};

// 迭代
var minDepth = function (root) {
  if (root === null) {
    return 0;
  }
  var queue = [root.left, root.right],
    depth = 1;
  while (queue.length) {
    var len = queue.length;
    while (len) {
      var left = queue.shift();
      var right = queue.shift();
      len -= 2;
      if (left === null && right === null) {
        return depth;
      }
      if (left) {
        queue.push(left.left, left.right);
      }
      if (right) {
        queue.push(right.left, right.right);
      }
    }
    depth += 1;
  }

  return depth;
};
// @lc code=end

