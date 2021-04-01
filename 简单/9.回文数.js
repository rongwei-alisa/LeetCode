/*
 * @Author: your name
 * @Date: 2021-03-18 11:29:12
 * @LastEditTime: 2021-03-22 17:18:06
 * @LastEditors: Please set LastEditors
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

var isPalindrome = function (x) {
	// 解法1:
	// if (x < 0) return false;
	// x += '';
	// var xTransfer = x.split('').reverse().join('');
	// return x === xTransfer;

	// 解法2: 一个指针从前遍历，一个指针从后遍历，判断前后的值是否相同

	// 解法3
	if (x < 0) return false;
	var result = 0, newNum = x;
	while (newNum) {
		result = result * 10 + newNum % 10;
		newNum = Math.floor(newNum / 10); // newNum / 10 | 0
	}
	return x === result;
};
// @lc code=end

