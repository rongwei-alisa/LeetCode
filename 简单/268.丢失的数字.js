/*
 * @Author: your name
 * @Date: 2021-07-12 23:31:17
 * @LastEditTime: 2021-07-13 00:00:47
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

// 位运算
var missingNumber = function (nums) {
  let missing = nums.length;
  for (var i = 0; i < nums.length; i++) {
    missing ^= i ^ nums[i];
  }
  return missing;
}

// 高斯求和法
var missingNumber = function (nums) {
  var total = (nums.length + 1) * nums.length / 2,
    numsTotal = 0;
  for (var i = 0; i < nums.length; i++) {
    numsTotal += nums[i];
  }
  return total - numsTotal;
}
// @lc code=end

