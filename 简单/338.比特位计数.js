/*
 * @Author: your name
 * @Date: 2021-07-21 09:37:33
 * @LastEditTime: 2021-07-21 16:18:30
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/338.比特位计数.js
 */
/*
 * @lc app=leetcode.cn id=338 lang=javascript
 *
 * [338] 比特位计数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  var result = new Array(n + 1).fill(0);
  for (var i = 1; i <= n; i++) {
    if (i & 1 === 1) {
      result[i] = result[i - 1] + 1;
    } else {
      result[i] = result[i >> 1];
    }
  }
  return result;
};
// @lc code=end

