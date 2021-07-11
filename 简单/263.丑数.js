/*
 * @Author: your name
 * @Date: 2021-07-09 09:15:30
 * @LastEditTime: 2021-07-11 20:08:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/263.丑数.js
 */
/*
 * @lc app=leetcode.cn id=263 lang=javascript
 *
 * [263] 丑数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isUgly = function (n) {
  if (n <= 0) return false;
  var num = n;
  while (num % 2 === 0) {
    num = num / 2;
  }
  while (num % 3 === 0) {
    num = num / 3;
  }
  while (num % 5 === 0) {
    num = num / 5;
  }
  return num === 1;
};
// @lc code=end

