/*
 * @Author: your name
 * @Date: 2021-06-08 18:33:04
 * @LastEditTime: 2021-06-08 19:04:58
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/171.excel表列序号.js
 */
/*
 * @lc app=leetcode.cn id=171 lang=javascript
 *
 * [171] Excel表列序号
 */

// @lc code=start
/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function (columnTitle) {
  var i = 0, num = 0, ACodeAt = 'A'.charCodeAt(0);
  while (i < columnTitle.length) {
    var codeAt = columnTitle[i].charCodeAt(0);
    num += (codeAt - ACodeAt + 1) * Math.pow(26, columnTitle.length - i - 1);
    i++
  }
  return num;
};
// @lc code=end

