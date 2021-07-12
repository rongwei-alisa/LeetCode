/*
 * @Author: your name
 * @Date: 2021-07-12 23:31:17
 * @LastEditTime: 2021-07-12 23:43:20
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/268.丢失的数字.js
 */
/*
 * @lc app=leetcode.cn id=268 lang=javascript
 *
 * [268] 丢失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  var len = nums.length, arr = new Array(len + 1).fill(0);
  for (var i = 0; i < len; i++) {
    arr[nums[i]] = 1;
  }
  for (var j = 0; j < len + 1; j++) {
    if (arr[j] === 0) {
      return j;
    }
  }
};
// @lc code=end

