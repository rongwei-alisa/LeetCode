/*
 * @Author: RongWei
 * @Date: 2021-11-08 09:43:01
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-08 09:59:11
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=680 lang=javascript
 *
 * [680] 验证回文字符串 Ⅱ
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
  const isRemo = function (subS) {
    let i = 0, j = subS.length - 1;
    while (i < j) {
      if (subS[i] !== subS[j]) {
        return false;
      }
      i++;
      j--;
    }
    return true;
  };
  if (isRemo(s)) {
    return true;
  }
  for (let k = 0; k < s.length; k++) {
    if (isRemo(s.substring(0, k) + s.substring(k + 1))) {
      return true;
    }
  }
  return false;
};
// @lc code=end

