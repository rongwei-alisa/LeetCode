/*
 * @Author: your name
 * @Date: 2021-05-13 09:29:58
 * @LastEditTime: 2021-05-13 16:18:22
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/108.将有序数组转换为二叉搜索树.js
 */
/*
 * @lc app=leetcode.cn id=108 lang=javascript
 *
 * [108] 将有序数组转换为二叉搜索树
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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  var getTree = (arr) => {
    if (arr.length === 0) return null;
    var mid = Math.floor((arr.length - 1) / 2); // 找出中间的数，则两侧的数分别位于左右子树中
    return new TreeNode(arr[mid], sortedArrayToBST(arr.slice(0, mid)), sortedArrayToBST(arr.slice(mid + 1)));
  };

  return getTree(nums);
};
// @lc code=end

