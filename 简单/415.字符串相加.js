/*
 * @Author: your name
 * @Date: 2021-08-16 20:05:39
 * @LastEditTime: 2021-08-16 20:29:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/415.字符串相加.js
 */
/*
 * @lc app=leetcode.cn id=415 lang=javascript
 *
 * [415] 字符串相加
 */

// @lc code=start
/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
  var i = num1.length - 1, j = num2.length - 1,
    result = '', quotient = 0;
  while (i >= 0 || j >= 0) {
    var sum = parseInt(num1[i] || 0) + parseInt(num2[j] || 0) + quotient;
    var remainder = sum % 10;
    quotient = parseInt(sum / 10);
    result = remainder + result;
    i--;
    j--
  }
  return quotient > 0 ? quotient + result : result;
};
// @lc code=end

