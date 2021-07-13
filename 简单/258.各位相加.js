/*
 * @Author: your name
 * @Date: 2021-07-08 09:38:33
 * @LastEditTime: 2021-07-13 20:12:35
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/258.各位相加.js
 */
/*
 * @lc app=leetcode.cn id=258 lang=javascript
 *
 * [258] 各位相加
 */

// @lc code=start
/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
  return (num - 1) % 9 + 1;
};
// @lc code=end

