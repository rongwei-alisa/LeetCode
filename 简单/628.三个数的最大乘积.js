/*
 * @Author: RongWei
 * @Date: 2021-10-22 10:52:34
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-22 19:28:12
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=628 lang=javascript
 *
 * [628] 三个数的最大乘积
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var maximumProduct = function (nums) {
  let sortedNums = nums.sort((a, b) => b - a);
  let len = nums.length;
  let positiveNumCount = 0;
  let negativeNumCount = 0;

  nums.each(num => {
    if (num >= 0) {
      positiveNumCount++;
    } else {
      negativeNumCount++;
    }
  });

  if (nums.length === 3 && positiveNumCount === nums.length) {
    return sortedNums[0] * sortedNums[1] * sortedNums[2];
  } else if (negativeNumCount === nums.length) {
    return sortedNums[len - 1] * sortedNums[len - 2] * sortedNums[len - 3];
  }

  if (negativeNumCount >= 2) {
    return Math.max(sortedNums[1] * sortedNums[2], sortedNums[len - 1] * sortedNums[len - 2])
  }
};
// @lc code=end

