/*
 * @Author: your name
 * @Date: 2021-07-23 09:25:58
 * @LastEditTime: 2021-07-23 09:32:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/344.反转字符串.js
 */
/*
 * @lc app=leetcode.cn id=344 lang=javascript
 *
 * [344] 反转字符串
 */

// @lc code=start
/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function (s) {
  var temp;
  var low = 0, high = s.length - 1;
  while (low <= high) {
    temp = s[low];
    s[low] = s[high];
    s[high] = temp;
    low++;
    high--;
  }
};
// @lc code=end

