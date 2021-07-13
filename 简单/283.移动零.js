/*
 * @Author: your name
 * @Date: 2021-07-14 00:03:44
 * @LastEditTime: 2021-07-14 00:37:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/283.移动零.js
 */
/*
 * @lc app=leetcode.cn id=283 lang=javascript
 *
 * [283] 移动零
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  var slow = 0, fast = 0, k;
  while (fast < nums.length) {
    if (nums[fast] === 0) {
      fast += 1;
    } else {
      nums[slow] = nums[fast];
      slow++;
      fast++;
    }
  }
  for (k = slow; k < nums.length; k++) {
    nums[k] = 0;
  }
};

// @lc code=end

