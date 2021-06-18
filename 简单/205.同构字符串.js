/*
 * @Author: your name
 * @Date: 2021-06-18 17:47:52
 * @LastEditTime: 2021-06-18 18:00:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/205.同构字符串.js
 */
/*
 * @lc app=leetcode.cn id=205 lang=javascript
 *
 * [205] 同构字符串
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isIsomorphic = function (s, t) {
  var obj = {};
  for (var i = 0; i < s.length; i++) {
    if (s[i] in obj) {
      if (obj[s[i]] !== t[i]) {
        return false;
      }
    } else {
      if (Object.values(obj).includes(t[i])) {
        return false;
      }
      obj[s[i]] = t[i];
    }
  }
  return true;
};
// @lc code=end

