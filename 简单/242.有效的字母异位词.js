/*
 * @Author: your name
 * @Date: 2021-07-06 09:10:30
 * @LastEditTime: 2021-07-06 09:43:34
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/242.有效的字母异位词.js
 */
/*
 * @lc app=leetcode.cn id=242 lang=javascript
 *
 * [242] 有效的字母异位词
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  for (var i = 0; i < s.length; i++) {
    var len = t.length;
    t = t.replace(s[i], '');
    if (t.length === len) {
      return false;
    }
  }
  return t.length === 0;
};
// @lc code=end