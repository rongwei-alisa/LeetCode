/*
 * @Author: RongWei
 * @Date: 2021-10-27 20:31:40
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-27 21:08:52
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=653 lang=javascript
 *
 * [653] 两数之和 IV - 输入 BST
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
 * @param {number} k
 * @return {boolean}
 */
var findTarget = function (root, k) {
  const nodesVal = [];
  const iterateeTree = function (node) {
    if (node === null) return;
    iterateeTree(node.left);
    nodesVal.push(node.val);
    iterateeTree(node.right);
  };
  iterateeTree(root);

  let i = 0,
    j = nodesVal.length - 1;
  while (i < j) {
    const val = nodesVal[i] + nodesVal[j];
    if (val === k) {
      return true;
    } else if (val > k) {
      j--;
    } else {
      i++;
    }
  }
  return false;
};
// @lc code=end

