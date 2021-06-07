/*
 * @Author: your name
 * @Date: 2021-06-07 09:42:40
 * @LastEditTime: 2021-06-07 22:20:40
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/169.多数元素.js
 */
/*
 * @lc app=leetcode.cn id=169 lang=javascript
 *
 * [169] 多数元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */

// 先排序，再取下标为 n/2 的元素
// var majorityElement = function (nums) {
//   var sortNums = nums.sort();
//   return sortNums[nums.length >> 1];
// };

// 摩尔投票法
var majorityElement = function (nums) {
  // var count = 0, i = 0, value = nums[i];
  // while (i < nums.length) {
  //   if (nums[i] === value) {
  //     count++
  //   } else {
  //     count--;
  //   }
  //   if (count === 0) {
  //     value = nums[i + 1];
  //   }
  //   i++;
  // }
  // return value;
  var count = 0, candidate;
  for (index in nums) {
    if (count === 0) {
      candidate = nums[index];
    }
    count += candidate === nums[index] ? 1 : -1;
  }
  return candidate;
};

// @lc code=end

