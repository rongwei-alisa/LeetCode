/*
 * @Author: RongWei
 * @Date: 2021-10-09 10:13:04
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-09 11:13:33
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=590 lang=javascript
 *
 * [590] N 叉树的后序遍历
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
 * @return {number[]}
 */
// var postorder = function (root) {
//   // 递归
//   let result = [];
//   const recursionTree = function (node) {
//     if (node === null) return;
//     node.children.forEach(child => {
//       recursionTree(child);
//       result.push(child.val);
//     });
//   };
//   recursionTree(root);
//   if (root) {
//     result.push(root.val);
//   }
//   return result;
// };

var postorder = function (root) {
  // 迭代
  let result = [];
  if (root === null) return result;
  let nodeStack = [root];
  while (nodeStack.length) {
    const node = nodeStack.shift();
    if (node.children.length) {
      const children = node.children;
      node.children = [];
      nodeStack.unshift(node);
      nodeStack.unshift(...children);
    } else {
      result.push(node.val);
    }
  }
  return result;
};
// @lc code=end

