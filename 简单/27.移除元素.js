/*
 * @Author: your name
 * @Date: 2021-03-18 23:17:06
 * @LastEditTime: 2021-03-19 17:09:51
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/27.移除元素.js
 */
/*
 * @lc app=leetcode.cn id=27 lang=javascript
 *
 * [27] 移除元素
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
	var len = nums.length, i = 0;
	while (i < len) {
		if (nums[i] === val) {
			nums.splice(i, 1);
		} else {
			i++;
		}
	}
	return nums.length;
};
// @lc code=end

