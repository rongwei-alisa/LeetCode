/*
 * @Author: RongWei
 * @Date: 2021-09-26 09:38:24
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-26 10:49:39
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=559 lang=javascript
 *
 * [559] N 叉树的最大深度
 */

// @lc code=start
/**
 * // Definition for a Node.
 * function Node(val,children) {
 *    this.val = val;
 *    this.children = children;
 * };
 */

/**
 * @param {Node|null} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (root === null) return 0;
  let maxDep = 1;
  for (let i = 0; i < root.children.length; i++) {
    maxDep = Math.max(maxDep, maxDepth(root.children[i]) + 1);
  }
  return maxDep;
};
// @lc code=end

