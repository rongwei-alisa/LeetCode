/*
 * @Author: your name
 * @Date: 2021-08-10 09:32:53
 * @LastEditTime: 2021-08-24 21:34:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/405.数字转换为十六进制数.js
 */
/*
 * @lc app=leetcode.cn id=405 lang=javascript
 *
 * [405] 数字转换为十六进制数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {string}
 */

var toHex = function (num) {
  var char = '0123456789abcdef';
  var positiveToHex = function (num) {
    var result = '',
      quotient = num,
      remainder = num;
    while (quotient >= 16) {
      remainder = quotient % 16;
      quotient = Math.floor(quotient / 16);
      result = char[remainder] + result;
    }
    return char[quotient] + result;
  };

  // 正数的二进制
  var hex = positiveToHex(Math.abs(num));
  if (num >= 0) return hex;

  // 负数的反码
  var onesComplete = '', _hex = hex.padStart(8, '0');
  for (var i = 0; i < _hex.length; i++) {
    var index = char.indexOf(_hex[i])
    onesComplete += char[15 - index];
  }

  // 补码
  var complement = '', carry = 1;
  for (var j = onesComplete.length - 1; j >= 0; j--) {
    var idx = char.indexOf(onesComplete[j]);
    var str = idx + carry > 15 ?
      char[idx + carry - 16] :
      char[idx + carry];
    complement = str + complement
    carry = Math.floor((idx + carry) / 16);
  }

  return complement;
};
// @lc code=end

