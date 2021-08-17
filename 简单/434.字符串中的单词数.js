/*
 * @Author: your name
 * @Date: 2021-08-17 09:29:41
 * @LastEditTime: 2021-08-17 09:39:15
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/434.字符串中的单词数.js
 */
/*
 * @lc app=leetcode.cn id=434 lang=javascript
 *
 * [434] 字符串中的单词数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var countSegments = function (s) {
  return s.split(' ').filter(i => i).length;
};
// @lc code=end

