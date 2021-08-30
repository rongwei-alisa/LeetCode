/*
 * @Author: your name
 * @Date: 2021-08-30 09:40:57
 * @LastEditTime: 2021-08-30 10:33:36
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/482.密钥格式化.js
 */
/*
 * @lc app=leetcode.cn id=482 lang=javascript
 *
 * [482] 密钥格式化
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var licenseKeyFormatting = function (s, k) {
  s = s.replace(/-/ig, '');
  var len = s.length;
  var remainder = len % k;
  var result = '';
  for (var i = 0; i < len / k; i++) {
    if (i === 0) {
      if (remainder) {
        result += s.substr(0, remainder);
      } else {
        result += s.substr(0, k);
      }
    } else {
      if (remainder) {
        result += '-' + s.substr((i - 1) * k + remainder, k);
      } else {
        result += '-' + s.substr(i * k, k);
      }
    }
  }
  return result.toUpperCase();
};
// @lc code=end

