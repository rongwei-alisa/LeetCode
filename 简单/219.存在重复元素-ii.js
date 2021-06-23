/*
 * @Author: your name
 * @Date: 2021-06-23 09:27:11
 * @LastEditTime: 2021-06-23 09:50:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/219.存在重复元素-ii.js
 */
/*
 * @lc app=leetcode.cn id=219 lang=javascript
 *
 * [219] 存在重复元素 II
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function (nums, k) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (nums[i] in obj && i - obj[nums[i]] <= k) {
      return true;
    } else {
      obj[nums[i]] = i;
    }
  }
  return false;
};
// @lc code=end

