/*
 * @Author: RongWei
 * @Date: 2021-11-09 09:29:01
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-09 09:59:06
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=8 lang=javascript
 *
 * [8] 字符串转换整数 (atoi)
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
  let firstLetter = '', result = 0, symbol = '+';
  for (let i = 0; i < s.length; i++) {
    if (firstLetter && !/[0-9]/.test(s[i])) {
      break;
    }
    if ([' '].includes(s[i])) {
      continue;
    } else if (['+', '-'].includes(s[i])) {
      symbol = s[i];
    } else {
      if (/[0-9]/.test(s[i])) {
        result = 10 * result + Number(s[i]);
      } else {
        break;
      }
    }
    if (!firstLetter) {
      firstLetter = s[i];
    }
  }
  const boundary = Math.pow(2, 31);
  result = symbol === '-' ? -result : result;
  if (result < -boundary) return -boundary;
  if (result > boundary - 1) return boundary - 1;
  return result;
};
// @lc code=end

