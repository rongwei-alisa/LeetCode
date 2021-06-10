/*
 * @Author: your name
 * @Date: 2021-06-10 09:33:00
 * @LastEditTime: 2021-06-10 23:03:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/190.颠倒二进制位.js
 */
/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  console.log('n', n);
  // 十进制转颠倒二进制字符串
  // var binaryStr = '', num = n, remainder = 0;
  // while (num) {
  //   remainder = num % 2;
  //   num = num >> 1;
  //   binaryStr = remainder + binaryStr;
  // }
  var binaryStr = n.toString(2);
  binaryStr = '0'.repeat(32 - binaryStr.length) + binaryStr;
  console.log('binaryStr', binaryStr);

  // 二进制转十进制
  var resultBinary = binaryStr.split('').reverse().join('');
  return parseInt(resultBinary, 2);
  // for (var i = 0; i < 32; i++) {
  //   if (binaryStr[i] === '0') continue;
  //   result += Math.pow(2, i);
  // }
  // return result;
};
// @lc code=end

