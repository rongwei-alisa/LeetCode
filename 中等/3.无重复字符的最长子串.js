/*
 * @Author: RongWei
 * @Date: 2021-10-18 09:42:21
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-18 10:10:53
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=3 lang=javascript
 *
 * [3] 无重复字符的最长子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestStr = '', str = '';
  for (let i = 0; i < s.length; i++) {
    let index = str.indexOf(s[i]);
    if (index > -1) {
      if (str.length > longestStr.length) {
        longestStr = str;
      }
      str = str.substr(index + 1) + s[i];
    } else {
      str += s[i];
    }
  }
  return Math.max(longestStr.length, str.length);
};
// @lc code=end

