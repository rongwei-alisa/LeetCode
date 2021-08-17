/*
 * @Author: your name
 * @Date: 2021-08-17 10:01:36
 * @LastEditTime: 2021-08-17 20:50:19
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/409.最长回文串.js
 */
/*
 * @lc app=leetcode.cn id=409 lang=javascript
 *
 * [409] 最长回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  var charShowTimes = {}, oddTimes = [];
  // 计算每个字母出现的次数
  for (var i = 0; i < s.length; i++) {
    if (!charShowTimes[s[i]]) {
      charShowTimes[s[i]] = 1;
    } else {
      charShowTimes[s[i]]++;
    }
  }

  for (key in charShowTimes) {
    // 出现次数为奇数的字母个数
    if (charShowTimes[key] % 2 !== 0) {
      oddTimes.push(charShowTimes[key]);
    }
  }

  return s.length - Math.max(0, (oddTimes.length - 1));
};
// @lc code=end

