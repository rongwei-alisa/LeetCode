/*
 * @Author: your name
 * @Date: 2021-08-25 09:35:21
 * @LastEditTime: 2021-08-25 09:45:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit  
 * @FilePath: /LeetCode/简单/461.汉明距离.js
 */
/*
 * @lc app=leetcode.cn id=461 lang=javascript
 *
 * [461] 汉明距离
 */

// @lc code=start
/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function (x, y) {
  var result = 0;
  while (x || y) {
    if (x % 2 !== y % 2) {
      result++;
    }
    x = x >> 1;
    y = y >> 1
  }
  return result;
};
// @lc code=end

