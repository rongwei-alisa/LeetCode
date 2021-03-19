/*
 * @Author: your name
 * @Date: 2021-03-18 23:32:21
 * @LastEditTime: 2021-03-19 17:12:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/28.实现-str-str.js
 */
/*
 * @lc app=leetcode.cn id=28 lang=javascript
 *
 * [28] 实现 strStr()
 */

// @lc code=start
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
	if (needle === '') return '';
	return haystack.indexOf(needle);
};
// @lc code=end

