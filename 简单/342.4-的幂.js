/*
 * @Author: your name
 * @Date: 2021-07-22 09:32:29
 * @LastEditTime: 2021-07-23 09:45:27
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/342.4-的幂.js
 */
/*
 * @lc app=leetcode.cn id=342 lang=javascript
 *
 * [342] 4的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfFour = function (n) {
  while (n >= 1) {
    if (n === 1) return true;
    if (n % 4 !== 0) return false;
    n = n / 4;
  }
  return false;
};
// @lc code=end

