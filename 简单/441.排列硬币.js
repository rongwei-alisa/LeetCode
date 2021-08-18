/*
 * @Author: your name
 * @Date: 2021-08-18 09:30:08
 * @LastEditTime: 2021-08-18 09:39:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/441.排列硬币.js
 */
/*
 * @lc app=leetcode.cn id=441 lang=javascript
 *
 * [441] 排列硬币
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function (n) {
  var rows = 0, sum = 0;
  while (n >= rows + 1) {
    rows++;
    n = n - rows;
  }
  return rows;
};
// @lc code=end

