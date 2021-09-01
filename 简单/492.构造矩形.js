/*
 * @Author: your name
 * @Date: 2021-09-01 09:22:32
 * @LastEditTime: 2021-09-01 10:01:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/492.构造矩形.js
 */
/*
 * @lc app=leetcode.cn id=492 lang=javascript
 *
 * [492] 构造矩形
 */

// @lc code=start
/**
 * @param {number} area
 * @return {number[]}
 */
var constructRectangle = function (area) {
  var L = Math.ceil(Math.sqrt(area)), W;
  while (L <= area) {
    W = area / L;
    if (area % L === 0) {
      return [L, W];
    }
    L++;
  }
};
// @lc code=end

