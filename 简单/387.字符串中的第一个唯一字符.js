/*
 * @Author: your name
 * @Date: 2021-08-03 09:54:53
 * @LastEditTime: 2021-08-03 19:48:50
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/387.字符串中的第一个唯一字符.js
 */
/*
 * @lc app=leetcode.cn id=387 lang=javascript
 *
 * [387] 字符串中的第一个唯一字符
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  var result = {},
    firstUniqCharIndex = s.length,
    hasUnicChar = false;
  for (var i = 0; i < s.length; i++) {
    if (result[s[i]]) {
      result[s[i]].count++;
    } else {
      result[s[i]] = {
        index: i,
        count: 1
      }
    }
  }
  for (var r in result) {
    if (result[r].count === 1 && result[r].index < firstUniqCharIndex) {
      hasUnicChar = true
      firstUniqCharIndex = result[r].index;
    }
  }
  return hasUnicChar ? firstUniqCharIndex : -1;
};
// @lc code=end

