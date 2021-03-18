/*
 * @Author: your name
 * @Date: 2021-03-18 23:03:52
 * @LastEditTime: 2021-03-18 23:15:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/26.删除有序数组中的重复项.js
 */
/*
 * @lc app=leetcode.cn id=26 lang=javascript
 *
 * [26] 删除有序数组中的重复项
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
	if(nums.length === 0 || nums.length === 1) return nums.length;
	var len = 1, j = 1;
  for(var i = 1; i < nums.length; i++) {
		if(nums[i] > nums[i-1]){
			len += 1;
			nums[j] = nums[i];
			j++;
		}
	}
	return j;
};
// @lc code=end

