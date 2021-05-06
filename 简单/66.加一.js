/*
 * @Author: your name
 * @Date: 2021-05-06 09:29:42
 * @LastEditTime: 2021-05-06 09:47:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/66.加一.js
 */
/*
 * @lc app=leetcode.cn id=66 lang=javascript
 *
 * [66] 加一
 */

// @lc code=start
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  var i = digits.length - 1;
  while (i >= 0) {
    if (digits[i] + 1 === 10) {
      digits[i] = 0;
      if (i === 0) {
        digits.unshift(1);
      }
      i--;
    } else {
      digits[i] = digits[i] + 1;
      break;
    }
  }
  return digits;
};
// @lc code=end

