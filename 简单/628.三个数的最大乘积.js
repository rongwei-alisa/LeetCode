/*
 * @Author: RongWei
 * @Date: 2021-10-22 10:52:34
 * @LastEditors: RongWei
 * @LastEditTime: 2022-02-14 19:59:09
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
  let sortedNums = nums.sort((a, b) => a - b);
  let len = nums.length;
  let rightProduct = sortedNums[len-1] * sortedNums[len-2] * sortedNums[len-3];
  let leftProduct = sortedNums[0] * sortedNums[1] * sortedNums[len-1];
  if (sortedNums[1]>=0) {
    return rightProduct;
  } else {
    return Math.max(leftProduct, rightProduct);
  }
};
// @lc code=end

