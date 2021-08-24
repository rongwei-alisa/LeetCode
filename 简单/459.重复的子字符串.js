/*
 * @Author: your name
 * @Date: 2021-08-24 19:01:29
 * @LastEditTime: 2021-08-24 19:27:06
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/459.重复的子字符串.js
 */
/*
 * @lc app=leetcode.cn id=459 lang=javascript
 *
 * [459] 重复的子字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var repeatedSubstringPattern = function (s) {
  if (s.length < 2) return false;
  for (var i = 0; i < s.length / 2; i++) {
    var isRepeated = true;
    var subStr = s.substring(0, i + 1);
    for (var j = 0; j < s.length; j += i + 1) {
      if (s.substring(j, j + i + 1) !== subStr) {
        isRepeated = false
        break;
      }
    }
    if (isRepeated) {
      return true;
    }
  }
  return false;
};
// @lc code=end

