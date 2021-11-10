/*
 * @Author: RongWei
 * @Date: 2021-11-10 20:50:38
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-10 21:21:10
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=693 lang=javascript
 *
 * [693] 交替位二进制数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function (n) {
  let prevRemainder = n % 2;
  while (n = n >> 1) {
    const remainder = n % 2;
    if (remainder ^ prevRemainder === 0) {
      return false;
    }
    prevRemainder = remainder;
  }
  return true;
};
// @lc code=end

