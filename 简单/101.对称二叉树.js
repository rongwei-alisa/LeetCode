/*
 * @Author: your name
 * @Date: 2021-05-11 09:42:04
 * @LastEditTime: 2021-05-12 20:55:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/101.对称二叉树.js
 */
/*
 * @lc app=leetcode.cn id=101 lang=javascript
 *
 * [101] 对称二叉树
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
// 递归
var isSymmetric = function (root) {
  var isSame = function (p, q) {
    if (!p && !q) return true;
    if (!p || !q) return false;
    if (p.val !== q.val) return false;
    return isSame(p.left, q.right) && isSame(p.right, q.left);
  };
  return isSame(root.left, root.right);
};

// 迭代
var isSymmetric = function (root) {
  if (!root) return true;
  var queue = [root.left, root.right], result = true;
  while (queue.length) {
    var p = queue.shift(), q = queue.shift();
    if (p === null && q === null) {
      continue;
    }
    if ((p === null || q === null) || (p.val !== q.val)) {
      result = false;
      break;
    }
    queue.push(p.left, q.right, p.right, q.left);
  }
  return result;
};
// @lc code=end

