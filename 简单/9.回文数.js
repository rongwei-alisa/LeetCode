/*
 * @Author: your name
 * @Date: 2021-03-18 11:29:12
 * @LastEditTime: 2021-03-18 11:32:11
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/9.回文数.js
 */
/*
 * @lc app=leetcode.cn id=9 lang=javascript
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
	if(x < 0) return false;

	var xTransfer = Number((x + '').split('').reverse().join(''));
	return x === xTransfer;
};
// @lc code=end

