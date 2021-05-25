/*
 * @Author: your name
 * @Date: 2021-05-25 18:48:21
 * @LastEditTime: 2021-05-25 19:19:11
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/125.验证回文串.js
 */
/*
 * @lc app=leetcode.cn id=125 lang=javascript
 *
 * [125] 验证回文串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  var simpleS = s.replace(/[^a-z0-9]/ig, '');
  if (simpleS.length === 0) return true;
  var i = 0, j = simpleS.length - 1;
  while (i < simpleS.length / 2) {
    if (
      simpleS[i] === simpleS[j] ||
      simpleS[i].toLowerCase() === simpleS[j].toLowerCase()
    ) {
      i++;
      j--;
      continue;
    } else {
      return false;
    }
  }
  return true;
};
// @lc code=end

