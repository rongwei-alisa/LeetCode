/*
 * @Author: RongWei
 * @Date: 2021-10-08 10:17:13
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-09 10:11:47
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=589 lang=javascript
 *
 * [589] N 叉树的前序遍历
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val, children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number[]}
 */
var preorder = function (root) {
  // 递归
  let result = [];
  const recursionTree = function (node) {
    if (node === null) return;
    result.push(node.val);
    node.children.forEach(child => {
      recursionTree(child);
    });
  }
  recursionTree(root);
  return result;
};
// @lc code=end

