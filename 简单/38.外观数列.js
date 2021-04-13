/*
 * @Author: your name
 * @Date: 2021-04-12 17:45:08
 * @LastEditTime: 2021-04-12 17:52:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/38.外观数列.js
 */
/*
 * @lc app=leetcode.cn id=38 lang=javascript
 *
 * [38] 外观数列
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n === 1) return '1';

  var result = '',
    lastStr = countAndSay(n - 1),
    figure = lastStr[0],
    count = 1;
  for (var i = 1; i < lastStr.length; i++) {
    if (figure === lastStr[i]) {
      count++;
    } else {
      result += count + figure;
      figure = lastStr[i];
      count = 1;
    }
  }
  return result += count + figure;
};
// @lc code=end

