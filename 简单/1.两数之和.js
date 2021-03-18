/*
 * @Author: your name
 * @Date: 2021-03-18 10:55:58
 * @LastEditTime: 2021-03-18 11:10:53
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/1.两数之和.js
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
	var obj = {};
  for(var i = 0; i < nums.length; i++){
		if((target - nums[i]) in obj) {
			return [obj[target - nums[i]], i];
		} else {
			obj[nums[i]] = i;
		}
	}
};
// @lc code=end

