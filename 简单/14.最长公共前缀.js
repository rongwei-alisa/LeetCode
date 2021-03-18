/*
 * @Author: your name
 * @Date: 2021-03-18 13:56:33
 * @LastEditTime: 2021-03-18 22:45:43
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/14.最长公共前缀.js
 */
/*
 * @lc app=leetcode.cn id=14 lang=javascript
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
	var result = '', j = 0, letter='';
	do {
		for(var i = 0; i < strs.length; i++) {
			if(i === 0) letter = strs[i][j];
			if(!letter || strs[i][j] !== letter) return result;
			if(i === strs.length - 1) result += letter;
		}
		j++;
	} while (letter)

	return result;
};
// @lc code=end

