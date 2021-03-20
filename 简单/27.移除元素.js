/*
 * @Author: your name
 * @Date: 2021-03-18 23:17:06
 * @LastEditTime: 2021-03-20 15:31:09
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
	// 直接删除数组元素，需要移动大量的元素
	// var len = nums.length, i = 0;
	// while (i < len) {
	// 	if (nums[i] === val) {
	// 		nums.splice(i, 1);
	// 	} else {
	// 		i++;
	// 	}
	// }
	// return nums.length;

	// 快慢指针
	// var slow = 0;
	// for (var i = 0; i < nums.length; i++) {
	// 	if (nums[i] !== val) {
	// 		nums[slow++] = nums[i];
	// 	}
	// }
	// return slow;

	// 用最后一个元素替换当前相等的元素
	var len = nums.length;
	for (var i = 0; i < len; i++) {
		if (nums[i] === val) {
			nums[i--] = nums[--len];
		}
	}
	return len;
};
// @lc code=end

