/*
 * @Author: RongWei
 * @Date: 2021-09-27 09:19:23
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-27 10:40:18
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=563 lang=javascript
 *
 * [563] 二叉树的坡度
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
var findTilt = function (root) {
  let tilt = 0;
  const getChildrenTilt = function (node) {
    if (node === null) return 0;
    const nodeLeftChildrenVal = getChildrenTilt(node.left);
    const nodeRightChildrenVal = getChildrenTilt(node.right);
    tilt += Math.abs(nodeLeftChildrenVal - nodeRightChildrenVal);
    return nodeLeftChildrenVal + nodeRightChildrenVal + node.val;
  }
  getChildrenTilt(root);
  return tilt;
};
// @lc code=end

