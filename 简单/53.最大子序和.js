/*
 * @Author: your name
 * @Date: 2021-04-28 09:25:52
 * @LastEditTime: 2021-04-28 20:54:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/53.最大子序和.js
 */
/*
 * @lc app=leetcode.cn id=53 lang=javascript
 *
 * [53] 最大子序和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  var preSum = nums[0], max = preSum;
  for (var i = 1; i < nums.length; i++) {
    var curSum = preSum < 0 ? nums[i] : preSum + nums[i];
    max = curSum > max ? curSum : max;
    preSum = curSum;
  }
  return max;
};
// @lc code=end

