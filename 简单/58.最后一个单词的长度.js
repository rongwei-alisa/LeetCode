/*
 * @Author: your name
 * @Date: 2021-04-12 17:15:57
 * @LastEditTime: 2021-04-12 17:23:38
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/58.最后一个单词的长度.js
 */
/*
 * @lc app=leetcode.cn id=58 lang=javascript
 *
 * [58] 最后一个单词的长度
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  var splitS = s.trim().split(' ');
  return splitS[splitS.length - 1].length;
};
// @lc code=end

