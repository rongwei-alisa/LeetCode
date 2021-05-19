/*
 * @Author: your name
 * @Date: 2021-05-19 19:31:32
 * @LastEditTime: 2021-05-19 20:45:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/118.杨辉三角.js
 */
/*
 * @lc app=leetcode.cn id=118 lang=javascript
 *
 * [118] 杨辉三角
 */

// @lc code=start
/**
 * @param {number} numRows
 * @return {number[][]}
 */
// 递归
var generate = function (numRows, result = []) {
  if (numRows === 0) {
    return [];
  } else if (numRows === 1) {
    result.push([1]);
  } else if (numRows === 2) {
    result.push([1], [1, 1]);
  } else {
    var arr = [1], triangle = generate(numRows - 1, result);
    var lastArr = triangle[triangle.length - 1],
      len = lastArr.length;
    for (var i = 1; i < len; i++) {
      arr.push(lastArr[i] + lastArr[i - 1]);
    }
    arr.push(1);
    result.push(arr)
  }
  return result;
};

// 迭代
var generate = function (numRows) {
  var triangle = [];
  for (var i = 0; i < numRows; i++) {
    var row = new Array(i + 1).fill(1);
    for (var j = 1; j < row.length - 1; j++) {
      row[j] = triangle[i - 1][j] + triangle[i - 1][j - 1];
    }
    triangle.push(row);
  }
  return triangle;
};
// @lc code=end

