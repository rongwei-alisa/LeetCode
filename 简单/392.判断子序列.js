/*
 * @Author: your name
 * @Date: 2021-08-05 09:42:13
 * @LastEditTime: 2021-08-09 11:44:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/392.判断子序列.js
 */
/*
 * @lc app=leetcode.cn id=392 lang=javascript
 *
 * [392] 判断子序列
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  var sIndex = 0, tIndex = 0;
  while (sIndex < s.length) {
    if (tIndex === t.length) {
      return false;
    }
    if (s[sIndex] === t[tIndex]) {
      sIndex++;
    }
    tIndex++;
  }
  return true;
};
// @lc code=end

