/*
 * @Author: your name
 * @Date: 2021-07-02 09:35:02
 * @LastEditTime: 2021-07-02 09:59:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/235.二叉搜索树的最近公共祖先.js
 */
/*
 * @lc app=leetcode.cn id=235 lang=javascript
 *
 * [235] 二叉搜索树的最近公共祖先
 */

// @lc code=start
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  let node = root;
  while (node) {
    if ((node.val >= p.val && node.val <= q.val) || (node.val <= p.val && node.val >= q.val)) {
      return node;
    } else if (node.val >= p.val && node.val >= q.val) {
      node = node.left;
    } else {
      node = node.right;
    }
  }
  return node;
};
// @lc code=end

