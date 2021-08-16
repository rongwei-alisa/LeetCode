/*
 * @Author: your name
 * @Date: 2021-08-13 09:34:02
 * @LastEditTime: 2021-08-13 10:03:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/414.第三大的数.js
 */
/*
 * @lc app=leetcode.cn id=414 lang=javascript
 *
 * [414] 第三大的数
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function (nums) {
  let first, second, third;
  for (let i = 0; i < nums.length; i++) {
    if (![first, second, third].includes(nums[i])) {
      if (nums[i] > first || (!first && first !== 0)) {
        third = second;
        second = first;
        first = nums[i];
      } else if (nums[i] >= second || (!second && second !== 0)) {
        third = second;
        second = nums[i];
      } else if (nums[i] >= third || (!third && third !== 0)) {
        third = nums[i];
      }
    }
  }
  return third ?? first;
};
// @lc code=end

