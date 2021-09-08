/*
 * @Author: rongwei
 * @Date: 2021-09-08 09:27:32
 * @LastEditors: rongwei
 * @LastEditTime: 2021-09-08 09:43:44
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=504 lang=javascript
 *
 * [504] 七进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
  var remainder = 0, result = '', symbol = '';
  if (num < 0) {
    num = Math.abs(num);
    symbol = '-';
  }
  while (num >= 7) {
    remainder = num % 7;
    num = Math.floor(num / 7);
    result = remainder + result;
  }
  result = symbol + num + result;

  return result;
};
// @lc code=end

