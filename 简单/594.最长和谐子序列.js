/*
 * @Author: RongWei
 * @Date: 2021-10-12 10:00:03
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-12 20:01:10
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=594 lang=javascript
 *
 * [594] 最长和谐子序列
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findLHS = function (nums) {
  let numTimes = new Map(), maxLength = 0;
  for (let i = 0; i < nums.length; i++) {
    if (numTimes.has(nums[i])) {
      const times = numTimes.get(nums[i]);
      numTimes.set(nums[i], times + 1);
    } else {
      numTimes.set(nums[i], 1);
    }
  }

  for (let num of numTimes.keys()) {
    const times = numTimes.get(num + 1);
    if (times) {
      maxLength = Math.max(numTimes.get(num) + times, maxLength);
    }
  }

  return maxLength;
};
// @lc code=end

