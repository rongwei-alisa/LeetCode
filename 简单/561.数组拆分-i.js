/*
 * @Author: RongWei
 * @Date: 2021-09-26 09:28:14
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-26 09:35:18
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=561 lang=javascript
 *
 * [561] 数组拆分 I
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
  let sum = 0;
  const sortedNums = nums.sort((num1, num2) => num1 - num2);
  for (let i = 0; i < sortedNums.length; i += 2) {
    sum += sortedNums[i];
  }
  return sum;
};
// @lc code=end

