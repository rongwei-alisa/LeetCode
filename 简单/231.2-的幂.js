/*
 * @Author: your name
 * @Date: 2021-06-29 09:48:44
 * @LastEditTime: 2021-06-30 10:23:00
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/231.2-的幂.js
 */
/*
 * @lc app=leetcode.cn id=231 lang=javascript
 *
 * [231] 2 的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfTwo = function (n) {
  // if (n <= 0) return false;
  // let tempNum = 1;
  // for (var i = 0; i < 31; i++) {
  //   if (tempNum === n) {
  //     return true;
  //   }
  //   tempNum = tempNum << 1;
  // }
  // return false;

  // return n > 0 && (n & (n - 1)) === 0;

  return n > 0 && (n & -n) === n;
};
// @lc code=end

