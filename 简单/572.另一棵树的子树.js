/*
 * @Author: RongWei
 * @Date: 2021-09-29 09:05:42
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-29 13:56:06
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=572 lang=javascript
 *
 * [572] 另一棵树的子树
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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  let sameRoots = []
  const findSameNode = function (node) {
    if (node === null) return false;
    if (node.val === subRoot.val) {
      sameRoots.push(node);
    }
    return findSameNode(node.left) || findSameNode(node.right);
  };
  const isSameTree = function (node1, node2) {
    if (node1 === null && node2) return false;
    if (node1 && node2 === null) return false;
    if (node1 === null && node2 === null) return true;
    if (node1.val !== node2.val) return false;
    return isSameTree(node1.left, node2.left) && isSameTree(node1.right, node2.right);
  };
  findSameNode(root);
  if (sameRoots.length) {
    let i = 0;
    while (sameRoots[i]) {
      if (isSameTree(sameRoots[i], subRoot)) {
        return true;
      }
      i++;
    }
  }
  return false;
};
// @lc code=end

