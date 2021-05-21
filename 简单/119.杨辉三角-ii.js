/*
 * @Author: your name
 * @Date: 2021-05-21 09:16:37
 * @LastEditTime: 2021-05-21 09:27:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/119.杨辉三角-ii.js
 */
/*
 * @lc app=leetcode.cn id=119 lang=javascript
 *
 * [119] 杨辉三角 II
 */

// @lc code=start
/**
 * @param {number} rowIndex
 * @return {number[]}
 */
var getRow = function (rowIndex) {
  if (rowIndex === 0) return [1];
  var result, lastResult = [1];
  for (var i = 1; i < rowIndex + 1; i++) {
    result = new Array(i + 1).fill(1);
    for (var j = 1; j < result.length - 1; j++) {
      result[j] = lastResult[j] + lastResult[j - 1];
    }
    lastResult = result;
  }
  return result;
};
// @lc code=end

