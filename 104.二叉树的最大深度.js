/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-02-02 10:26:21
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-02-08 10:17:50
 */
/*
 * @lc app=leetcode.cn id=104 lang=javascript
 *
 * [104] 二叉树的最大深度
 *
 * https://leetcode-cn.com/problems/maximum-depth-of-binary-tree/description/
 *
 * algorithms
 * Easy (71.92%)
 * Likes:    438
 * Dislikes: 0
 * Total Accepted:    117K
 * Total Submissions: 162.5K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * 给定一个二叉树，找出其最大深度。
 * 
 * 二叉树的深度为根节点到最远叶子节点的最长路径上的节点数。
 * 
 * 说明: 叶子节点是指没有子节点的节点。
 * 
 * 示例：
 * 给定二叉树 [3,9,20,null,null,15,7]，
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 返回它的最大深度 3 。
 * 
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
 * @return {number}
 */
var maxDepth = function (root) {
    // let max = 0,
    //     stack = [],
    //     cur = root;
    // if (!root) {
    //     return 0;
    // }
    // cur.depth = 1;
    // while (cur || stack.length) {
    //     while (cur) {
    //         stack.push(cur);
    //         if (cur.left) {
    //             cur.left.depth = cur.depth + 1;
    //         }
    //         cur = cur.left;
    //     }

    //     let node = stack.pop();
    //     if (node.depth > max) {
    //         max = node.depth;
    //     }
    //     if (node.right) {
    //         node.right.depth = node.depth + 1;
    //     }
    //     cur = node.right;
    // }
    // return max;
    if (!root) {
        return 0;
    }
    return Math.max(maxDepth(root.left), maxDepth(root.right)) + 1;
};
// @lc code=end

