/*
 * @Author: RongWei
 * @Date: 2021-11-10 20:50:38
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-10 21:13:42
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
  const keyValue = new Map([[0, 1], [1, 0]]);
  let prevRemainder = n % 2;
  while (n = n >> 1) {
    const remainder = n % 2;
    if (keyValue.get(remainder) !== prevRemainder) {
      return false;
    }
    prevRemainder = remainder;
  }
  return true;
};
// @lc code=end

