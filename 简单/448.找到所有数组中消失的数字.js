/*
 * @Author: your name
 * @Date: 2021-08-19 09:42:53
 * @LastEditTime: 2021-08-23 17:42:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/448.找到所有数组中消失的数字.js
 */
/*
 * @lc app=leetcode.cn id=448 lang=javascript
 *
 * [448] 找到所有数组中消失的数字
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDisappearedNumbers = function (nums) {
  var newNums = new Array(nums.length).fill(0),
    result = [];
  for (var i = 0; i < nums.length; i++) {
    newNums[nums[i] - 1] = nums[i];
  }
  for (var j = 0; j < newNums.length; j++) {
    if (newNums[j] !== j + 1) {
      result.push(j + 1);
    }
  }
  return result;
};
// @lc code=end

