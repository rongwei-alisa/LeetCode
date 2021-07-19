/*
 * @Author: your name
 * @Date: 2021-07-14 00:41:55
 * @LastEditTime: 2021-07-15 20:10:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/290.单词规律.js
 */
/*
 * @lc app=leetcode.cn id=290 lang=javascript
 *
 * [290] 单词规律
 */

// @lc code=start
/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  var arr = s.split(' '), obj = {}, valuesObj = {};
  if (arr.length !== pattern.length) return false;
  for (var i = 0; i < pattern.length; i++) {
    if (obj[pattern[i]]) {
      if (obj[pattern[i]] !== arr[i]) {
        return false;
      }
    } else {
      if (valuesObj[arr[i]]) return false;
      obj[pattern[i]] = arr[i];
      valuesObj[arr[i]] = pattern[i];
    }
  }
  return true;
};
// @lc code=end

