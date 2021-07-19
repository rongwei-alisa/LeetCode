/*
 * @Author: your name
 * @Date: 2021-07-19 09:46:30
 * @LastEditTime: 2021-07-19 12:24:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/292.nim-游戏.js
 */
/*
 * @lc app=leetcode.cn id=292 lang=javascript
 *
 * [292] Nim 游戏
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function (n) {
  if (n % 4 === 0) {
    return false;
  }
  return true;
};
// @lc code=end

