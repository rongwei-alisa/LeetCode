/*
 * @Author: RongWei
 * @Date: 2021-09-18 09:36:34
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-18 10:48:57
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=543 lang=javascript
 *
 * [543] 二叉树的直径
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
var diameterOfBinaryTree = function (root) {
  var result = 0;
  var treeDepth = function (node) {
    var leftDepth = 0, rightDepth = 0;
    if (node === null) {
      return 0;
    }
    leftDepth = treeDepth(node.left);
    rightDepth = treeDepth(node.right);

    result = Math.max(result, leftDepth + rightDepth + 1);
    return Math.max(leftDepth, rightDepth) + 1;
  };
  treeDepth(root);
  return result - 1;
};
// @lc code=end

