/*
 * @Author: your name
 * @Date: 2021-03-18 22:47:38
 * @LastEditTime: 2021-03-18 23:01:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/20.有效的括号.js
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if(s.length % 2 !== 0) return false;
  var obj = {
		'(': ')',
		'[': ']',
		'{': '}'
	};
	var result = [];
	for(var i = 0; i < s.length; i++) {
		if(s[i] in obj) {
			result.push(s[i]);
		} else {
			var top = result.pop();
			if(obj[top] !== s[i]){
				return false
			}
		}
	}
	return !result.length;
};
// @lc code=end

