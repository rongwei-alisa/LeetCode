/*
 * @Author: RongWei
 * @Date: 2021-09-23 09:28:33
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-23 09:50:24
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=557 lang=javascript
 *
 * [557] 反转字符串中的单词 III
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
  let substr = '', result = '';
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== ' ') {
      substr = s[i] + substr;
    } else {
      result = result + substr + ' ';
      substr = '';
    }
  }
  result += substr;
  return result;
};
// @lc code=end

