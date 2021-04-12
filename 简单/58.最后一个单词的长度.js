/*
 * @Author: your name
 * @Date: 2021-04-12 17:15:57
 * @LastEditTime: 2021-04-12 17:39:46
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
  // var splitS = s.trim().split(' ');
  // return splitS[splitS.length - 1].length;

  // return s.trim().split(' ').pop().length;

  var end = s.length - 1;
  while (end >= 0 && s[end] === ' ') end--;
  var start = end;
  while (start >= 0 && s[start] !== ' ') start--;
  return end - start;
};
// @lc code=end

