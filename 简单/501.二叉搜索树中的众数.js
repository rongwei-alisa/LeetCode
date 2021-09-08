/*
 * @Author: rongwei
 * @Date: 2021-09-07 11:17:14
 * @LastEditors: rongwei
 * @LastEditTime: 2021-09-08 10:12:23
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=501 lang=javascript
 *
 * [501] 二叉搜索树中的众数
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
var findMode = function (root) {
  var maxCount = 0, count = 0, result = [], num = 0;
  var recordMax = function (node) {
    if (node.val === num) {
      count++;
    } else {
      num = node.val;
      count = 1;
    }
    if (count > maxCount) {
      result = [num];
      maxCount = count;
    } else if (count === maxCount) {
      result.push(num);
    }
  };

  var iterateTree = function (node) {
    if (!node) return;

    iterateTree(node.left);
    recordMax(node);
    iterateTree(node.right);
  };

  iterateTree(root);
  return result;
};
// @lc code=end

