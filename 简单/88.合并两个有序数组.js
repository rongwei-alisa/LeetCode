/*
 * @Author: your name
 * @Date: 2021-05-10 09:51:01
 * @LastEditTime: 2021-05-12 19:01:44
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/88.合并两个有序数组.js
 */
/*
 * @lc app=leetcode.cn id=88 lang=javascript
 *
 * [88] 合并两个有序数组
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  // 直接修改原数组
  // var i = 0, j = 0, added = 0;
  // while (i < m + added) {
  //   if (nums1[i] > nums2[j]) {
  //     nums1.splice(i, 0, nums2[j]);
  //     added++;
  //     j++;
  //   }
  //   i++;
  // }
  // for (j; j < n; j++, i++) {
  //   nums1.splice(i, 0, nums2[j]);
  // }
  // nums1.length = m + n;

  // 先将结果存在新数组里，再复制到 nums1 中
  var nums = [], i = 0, j = 0, k = 0;
  while (i < m && j < n) {
    if (nums1[i] < nums2[j]) {
      nums.push(nums1[i]);
      i++;
    } else {
      nums.push(nums2[j]);
      j++;
    }
  }
  if (i === m) {
    nums.push(...(nums2.slice(j)));
  } else {
    nums.push(...(nums1.slice(i)));
  }
  while (k < m + n) {
    nums1[k] = nums[k];
    k++;
  }
};
// @lc code=end

