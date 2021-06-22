/*
 * @Author: your name
 * @Date: 2021-06-22 09:44:53
 * @LastEditTime: 2021-06-22 09:56:14
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/217.存在重复元素.js
 */
/*
 * @lc app=leetcode.cn id=217 lang=javascript
 *
 * [217] 存在重复元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  var map = {};
  for (var i = 0; i < nums.length; i++) {
    if (map[nums[i]]) {
      return true;
    } else {
      map[nums[i]] = true;
    }
  }
  return false;
};
// @lc code=end

