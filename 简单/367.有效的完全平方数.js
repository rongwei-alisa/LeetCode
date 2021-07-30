/*
 * @Author: your name
 * @Date: 2021-07-29 09:29:38
 * @LastEditTime: 2021-07-29 09:49:07
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/367.有效的完全平方数.js
 */
/*
 * @lc app=leetcode.cn id=367 lang=javascript
 *
 * [367] 有效的完全平方数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function (num) {
  var low = 0, high = Math.ceil(num / 2), mid, square;
  while (low <= high) {
    mid = parseInt((high - low) / 2 + low);
    square = mid * mid
    if (square === num) {
      return true;
    } else if (square > num) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return false;
};
// @lc code=end

