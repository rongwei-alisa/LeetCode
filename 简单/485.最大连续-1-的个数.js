/*
 * @Author: your name
 * @Date: 2021-08-31 09:13:31
 * @LastEditTime: 2021-08-31 09:26:05
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/485.最大连续-1-的个数.js
 */
/*
 * @lc app=leetcode.cn id=485 lang=javascript
 *
 * [485] 最大连续 1 的个数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  var max = 0, count = 0;
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] === 1) {
      count++;
    } else {
      max = Math.max(max, count);
      count = 0;
    }
    if (i === nums.length - 1) {
      max = Math.max(max, count);
    }
  }
  return max;
};
// @lc code=end

