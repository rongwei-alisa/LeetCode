/*
 * @Author: your name
 * @Date: 2021-07-20 09:38:07
 * @LastEditTime: 2021-07-20 09:49:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/326.3-的幂.js
 */
/*
 * @lc app=leetcode.cn id=326 lang=javascript
 *
 * [326] 3的幂
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isPowerOfThree = function (n) {
  if (n <= 0) return false;
  var low = 0, high = 31;
  while (low <= high) {
    var mid = parseInt((low + high) / 2);
    var num = Math.pow(3, mid);
    if (num === n) {
      return true;
    } else if (num > n) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};
// @lc code=end

