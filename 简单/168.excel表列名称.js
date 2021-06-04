/*
 * @Author: your name
 * @Date: 2021-06-04 09:35:31
 * @LastEditTime: 2021-06-04 10:17:56
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/168.excel表列名称.js
 */
/*
 * @lc app=leetcode.cn id=168 lang=javascript
 *
 * [168] Excel表列名称
 */

// @lc code=start
/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
  const charaArr = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  if (columnNumber <= 26) {
    return charaArr[columnNumber - 1];
  }
  const quotient = parseInt((columnNumber - 1) / 26);
  const remainder = (columnNumber - 1) % 26;
  return convertToTitle(quotient) + charaArr[remainder];
};
// @lc code=end

