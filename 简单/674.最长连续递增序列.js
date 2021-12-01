/*
 * @Author: RongWei
 * @Date: 2021-12-01 09:29:44
 * @LastEditors: RongWei
 * @LastEditTime: 2021-12-01 09:36:10
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=674 lang=javascript
 *
 * [674] 最长连续递增序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLengthOfLCIS = function (nums) {
  let prevMax = 0, maxLength = 1;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > nums[i - 1]) {
      maxLength++;
    } else {
      prevMax = Math.max(prevMax, maxLength);
      maxLength = 1;
    }
  }
  return Math.max(prevMax, maxLength);
};
// @lc code=end

