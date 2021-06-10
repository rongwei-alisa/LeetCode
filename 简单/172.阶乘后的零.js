/*
 * @Author: your name
 * @Date: 2021-06-09 09:36:02
 * @LastEditTime: 2021-06-09 22:27:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/172.阶乘后的零.js
 */
/*
 * @lc app=leetcode.cn id=172 lang=javascript
 *
 * [172] 阶乘后的零
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var trailingZeroes = function (n) {
  if (n < 5) return 0;
  n = parseInt(n / 5);
  return n + trailingZeroes(n);
};
// @lc code=end

