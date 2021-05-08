/*
 * @Author: your name
 * @Date: 2021-05-08 13:55:17
 * @LastEditTime: 2021-05-08 14:01:31
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/69.x-的平方根.js
 */
/*
 * @lc app=leetcode.cn id=69 lang=javascript
 *
 * [69] x 的平方根
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  var l = 0, r = x, result;
  while (l <= r) {
    var mid = Math.floor(l + (r - l) / 2);
    if (mid * mid <= x) {
      result = mid;
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }
  return result;
};
// @lc code=end

