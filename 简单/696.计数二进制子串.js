/*
 * @Author: RongWei
 * @Date: 2021-11-11 09:31:36
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-11 09:51:21
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=696 lang=javascript
 *
 * [696] 计数二进制子串
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countBinarySubstrings = function (s) {
  let lastCharCount = 0, curCharCount = 0;
  let result = 0;
  for (let i = 0; i < s.length; i++) {
    if (i === 0) {
      curCharCount++;
    } else if (s[i] === s[i - 1]) {
      curCharCount++;
    } else {
      result += Math.min(curCharCount, lastCharCount);
      lastCharCount = curCharCount;
      curCharCount = 1;
    }
  }
  result += Math.min(curCharCount, lastCharCount);
  return result;
};
// @lc code=end

