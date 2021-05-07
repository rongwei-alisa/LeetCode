/*
 * @Author: your name
 * @Date: 2021-05-07 09:56:37
 * @LastEditTime: 2021-05-07 19:55:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/67.二进制求和.js
 */
/*
 * @lc app=leetcode.cn id=67 lang=javascript
 *
 * [67] 二进制求和
 */

// @lc code=start
/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  var i = a.length - 1,
    j = b.length - 1,
    carry = 0,
    singleSum,
    c = '';
  while (i >= 0 || j >= 0) {
    var a1 = parseInt(a[i] || '0'), b1 = parseInt(b[j] || '0');
    singleSum = (a1 + b1 + carry) % 2;
    carry = Math.floor((a1 + b1 + carry) / 2);
    c = singleSum + c;
    i--;
    j--;
  }
  c = carry === 0 ? c : carry + c;
  return c;
};
// @lc code=end

