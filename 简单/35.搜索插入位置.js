/*
 * @Author: your name
 * @Date: 2021-04-01 16:27:56
 * @LastEditTime: 2021-04-01 16:51:21
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/35.搜索插入位置.js
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  if (target <= nums[0]) return 0;
  if (target > nums[nums.length - 1]) return nums.length;
  var index = 1;
  while (index < nums.length) {
    if (
      target === nums[index] ||
      (target > nums[index - 1] && target < nums[index])
    ) {
      break;
    }
    index++;
  }
  return index;
};
// @lc code=end

