/*
 * @Author: your name
 * @Date: 2021-05-25 18:48:21
 * @LastEditTime: 2021-05-25 20:22:51
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
// 方法一
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

// 方法二
var isPalindrome = function (s) {
  var i = 0, j = s.length - 1;
  var isLetterOrDigit = function (letter) {
    if (letter >= 'a' && letter <= 'z') return true;
    if (letter >= 'A' && letter <= 'Z') return true;
    if (letter >= '0' && letter <= '9') return true;
    return false;
  };

  while (i < j) {
    if (!isLetterOrDigit(s[i])) {
      i++;
      continue
    }
    if (!isLetterOrDigit(s[j])) {
      j--;
      continue;
    }
    if (s[i].toLowerCase() !== s[j].toLowerCase()) {
      return false;
    }
    i++;
    j--
  }
  return true;
};
// @lc code=end

