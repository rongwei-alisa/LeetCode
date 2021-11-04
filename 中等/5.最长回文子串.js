/*
 * @Author: RongWei
 * @Date: 2021-11-04 20:25:11
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-04 21:21:13
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=5 lang=javascript
 *
 * [5] 最长回文子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length < 2) return s;
  const dp = [];
  let begin = 0, maxLen = 1;
  // 对角线赋值为 true
  for (let i = 0; i < s.length; i++) {
    dp[i] = [];
    dp[i][i] = true;
  }

  for (let j = 0; j < s.length; j++) {
    for (let i = 0; i < j; i++) {
      if (j - i > 2) {
        dp[i][j] = (s[i] === s[j] && dp[i + 1][j - 1]);
      } else {
        dp[i][j] = s[i] === s[j];
      }
      if (dp[i][j] && j - i + 1 > maxLen) {
        maxLen = j - i + 1;
        begin = i;
      }
    }
  }

  return s.substr(begin, maxLen);
};
// @lc code=end

