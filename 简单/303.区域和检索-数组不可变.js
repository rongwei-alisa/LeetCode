/*
 * @Author: your name
 * @Date: 2021-07-19 09:36:21
 * @LastEditTime: 2021-07-19 09:43:57
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/303.区域和检索-数组不可变.js
 */
/*
 * @lc app=leetcode.cn id=303 lang=javascript
 *
 * [303] 区域和检索 - 数组不可变
 */

// @lc code=start
/**
 * @param {number[]} nums
 */
var NumArray = function (nums) {
  this.nums = nums;
};

/** 
 * @param {number} left 
 * @param {number} right
 * @return {number}
 */
NumArray.prototype.sumRange = function (left, right) {
  var sum = 0;
  for (var i = left; i <= right; i++) {
    sum += this.nums[i];
  }
  return sum;
};

/**
 * Your NumArray object will be instantiated and called as such:
 * var obj = new NumArray(nums)
 * var param_1 = obj.sumRange(left,right)
 */
// @lc code=end

