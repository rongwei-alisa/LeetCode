/*
 * @Author: your name
 * @Date: 2021-06-11 18:57:39
 * @LastEditTime: 2021-06-11 19:00:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/191.位-1-的个数.js
 */
/*
 * @lc app=leetcode.cn id=191 lang=javascript
 *
 * [191] 位1的个数
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  var result = 0;
  while (n) {
    if (n & 1) {
      result += 1;
    }
    n >>>= 1;
  }
  return result;
};
// @lc code=end

