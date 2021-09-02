/*
 * @Author: your name
 * @Date: 2021-09-02 09:19:01
 * @LastEditTime: 2021-09-02 09:54:57
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/495.提莫攻击.js
 */
/*
 * @lc app=leetcode.cn id=495 lang=javascript
 *
 * [495] 提莫攻击
 */

// @lc code=start
/**
 * @param {number[]} timeSeries
 * @param {number} duration
 * @return {number}
 */
var findPoisonedDuration = function (timeSeries, duration) {
  if (timeSeries.length === 0) return 0;
  var result = 0;
  for (var i = 1; i < timeSeries.length; i++) {
    if (timeSeries[i] - timeSeries[i - 1] < duration) {
      result += timeSeries[i] - timeSeries[i - 1];
    } else {
      result += duration;
    }
  }
  result += duration;
  return result;
};
// @lc code=end

