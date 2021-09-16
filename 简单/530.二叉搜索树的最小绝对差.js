/*
 * @Author: RongWei
 * @Date: 2021-09-16 09:20:35
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-16 09:33:12
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=530 lang=javascript
 *
 * [530] 二叉搜索树的最小绝对差
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
var getMinimumDifference = function (root) {
  var sortedVal = [];
  var iterateeTree = function (node) {
    if (node === null) return;
    iterateeTree(node.left);
    sortedVal.push(node.val);
    iterateeTree(node.right);
  };

  iterateeTree(root);

  var result = Math.abs(sortedVal[1] - sortedVal[0]);
  for (var i = 2; i < sortedVal.length; i++) {
    var diff = Math.abs(sortedVal[i] - sortedVal[i - 1]);
    if (diff < result) {
      result = diff;
    }
  }
  return result;
};
// @lc code=end

