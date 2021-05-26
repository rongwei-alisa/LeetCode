/*
 * @Author: your name
 * @Date: 2021-05-26 09:21:22
 * @LastEditTime: 2021-05-26 17:08:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/136.只出现一次的数字.js
 */
/*
 * @lc app=leetcode.cn id=136 lang=javascript
 *
 * [136] 只出现一次的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  var obj = {};
  for (var i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = 1;
    } else {
      obj[nums[i]]++;
    }
  }
  for (var i in obj) {
    if (obj[i] === 1) {
      return i;
    }
    continue;
  }
};
// @lc code=end

