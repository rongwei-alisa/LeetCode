/*
 * @Author: your name
 * @Date: 2021-08-30 10:34:30
 * @LastEditTime: 2021-08-30 11:01:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/476.数字的补数.js
 */
/*
 * @lc app=leetcode.cn id=476 lang=javascript
 *
 * [476] 数字的补数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function (num) {
  var i = 0;
  while (i < 32) {
    if (Math.pow(2, i) > num) {
      return num ^ Math.pow(2, i) - 1;
    }
    i++;
  }
};
// @lc code=end

