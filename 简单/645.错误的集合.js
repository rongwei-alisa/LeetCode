/*
 * @Author: RongWei
 * @Date: 2021-10-26 09:38:09
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-26 20:31:46
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=645 lang=javascript
 *
 * [645] 错误的集合
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  const fillNums = new Array(nums.length).fill(0);
  const results = new Array(2).fill(0);
  for (let i = 0; i < nums.length; i++) {
    if (fillNums[nums[i] - 1] === 0) {
      fillNums[nums[i] - 1] = nums[i];
    } else {
      results[0] = nums[i];
    }
  }
  for (let j = 0; j < fillNums.length; j++) {
    if (fillNums[j] === 0) {
      results[1] = j + 1;
      return results;
    }
  }
};
// @lc code=end

