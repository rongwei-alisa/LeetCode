/*
 * @Author: your name
 * @Date: 2021-03-18 11:32:58
 * @LastEditTime: 2021-03-22 16:41:03
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/13.罗马数字转整数.js
 */
/*
 * @lc app=leetcode.cn id=13 lang=javascript
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
	// var obj = {
	// 	'I': 1,
	// 	'V': 5,
	// 	'X': 10,
	// 	'L': 50,
	// 	'C': 100,
	// 	'D': 500,
	// 	'M': 1000
	// }, num = 0;

	// var specificRule = function(left, right) {
	// 	var rule = {
	// 		'I': ['V', 'X'],
	// 		'X': ['L', 'C'],
	// 		'C': ['D', 'M']
	// 	};
	// 	if(left in rule && rule[left].includes(right)) {
	// 		return true;
	// 	} else {
	// 		return false;
	// 	}
	// }

	// for(var i = 0; i < s.length; i++) {
	// 	if(specificRule(s[i], s[i + 1])){
	// 		num += obj[s[i + 1]] - obj[s[i]];
	// 		i++;
	// 	} else {
	// 		num += obj[s[i]];
	// 	}
	// }

	// return num;

	var obj = {
		'I': 1,
		'V': 5,
		'X': 10,
		'L': 50,
		'C': 100,
		'D': 500,
		'M': 1000
	}, num = 0, len = s.length;
	for (var i = 0; i + 1 < len; i++) {
		var cur = obj[s[i]];
		if (cur >= obj[s[i + 1]]) {
			num += cur;
		} else {
			num += -cur;
		}
	}
	num += obj[s[len - 1]];
	return num;
};
// @lc code=end

