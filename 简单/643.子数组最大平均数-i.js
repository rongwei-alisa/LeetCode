/*
 * @Author: RongWei
 * @Date: 2021-10-26 09:16:14
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-26 09:31:45
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=643 lang=javascript
 *
 * [643] 子数组最大平均数 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function (nums, k) {
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    maxSum += nums[i];
  }
  let sum = maxSum;
  for (let j = 1; j <= nums.length - k; j++) {
    sum = sum - nums[j - 1] + nums[j + k - 1];
    maxSum = Math.max(maxSum, sum);
  }
  return maxSum / k;
};
// @lc code=end

