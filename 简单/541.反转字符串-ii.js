/*
 * @Author: RongWei
 * @Date: 2021-09-17 09:21:03
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-17 10:38:39
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=541 lang=javascript
 *
 * [541] 反转字符串 II
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
var reverseStr = function (s, k) {
  let bigCurcle = 1, substr = '', result = '';

  for (let i = 0; i < s.length; i++) {
    if (i % k === 0) {
      result += substr;
      substr = '';
    }
    if (i >= (k * 2) && i % (k * 2) === 0) {
      bigCurcle += 2;
    }
    if (i < bigCurcle * k) {
      substr = s[i] + substr;
    } else if (i < bigCurcle * k * 2) {
      substr = substr + s[i];
    }
  }
  result += substr;

  return result;
};
// @lc code=end

