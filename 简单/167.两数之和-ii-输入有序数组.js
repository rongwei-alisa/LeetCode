/*
 * @Author: your name
 * @Date: 2021-06-03 09:39:02
 * @LastEditTime: 2021-06-03 09:49:36
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/167.两数之和-ii-输入有序数组.js
 */
/*
 * @lc app=leetcode.cn id=167 lang=javascript
 *
 * [167] 两数之和 II - 输入有序数组
 */

// @lc code=start
/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  var obj = {};
  for (var i = 0; i < numbers.length; i++) {
    if ((target - numbers[i]) in obj) {
      return [obj[target - numbers[i]], i + 1];
    } else {
      obj[numbers[i]] = i + 1;
    }
  }
};
// @lc code=end

