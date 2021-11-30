/*
 * @Author: RongWei
 * @Date: 2021-11-08 09:43:01
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-30 10:07:52
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

  let low = 0, high = s.length - 1;
  while (low < high) {
    if (s[low] === s[high]) {
      low++;
      high--;
    } else {
      return isRemo(s.substring(low + 1, high + 1)) || isRemo(s.substring(low, high));
    }
  }
  return true;
};
// @lc code=end

