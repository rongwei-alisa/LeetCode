/*
 * @Author: your name
 * @Date: 2021-06-28 09:42:37
 * @LastEditTime: 2021-06-28 19:26:47
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/228.汇总区间.js
 */
/*
 * @lc app=leetcode.cn id=228 lang=javascript
 *
 * [228] 汇总区间
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {string[]}
 */
var summaryRanges = function (nums) {
  if (nums.length === 0) return [];
  if (nums.length === 1) return [`${nums[0]}`];

  var result = [], minNum;
  for (var i = 0; i < nums.length; i++) {
    if (i === 0) {
      minNum = nums[i];
    } else if (nums[i] - nums[i - 1] > 1) {
      if (nums[i - 1] === minNum) {
        result.push(`${minNum}`);
      } else {
        result.push(`${minNum}->${nums[i - 1]}`)
      }
      if (i === nums.length - 1) {
        result.push(`${nums[i]}`);
      }
      minNum = nums[i];
    } else if (i === nums.length - 1) {
      result.push(`${minNum}->${nums[i]}`)
    }
  }
  return result;
};
// @lc code=end

