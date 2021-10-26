/*
 * @Author: RongWei
 * @Date: 2021-10-22 09:38:58
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-22 10:51:10
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=637 lang=javascript
 *
 * [637] 二叉树的层平均值
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
var averageOfLevels = function (root) {
  let nodes = [root], subNodes = [], arr = [];
  let sum = 0, len = nodes.length;
  while (nodes.length) {
    let node = nodes.shift();
    sum += node.val;
    if (node.left) {
      subNodes.push(node.left);
    }
    if (node.right) {
      subNodes.push(node.right);
    }
    if (nodes.length === 0) {
      arr.push(sum / len);
      nodes = subNodes;
      len = nodes.length
      sum = 0;
      subNodes = [];
    }
  }
  return arr;
};
// @lc code=end

