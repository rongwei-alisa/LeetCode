/*
 * @Author: your name
 * @Date: 2021-07-28 09:33:32
 * @LastEditTime: 2021-07-28 10:01:33
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/350.两个数组的交集-ii.js
 */
/*
 * @lc app=leetcode.cn id=350 lang=javascript
 *
 * [350] 两个数组的交集 II
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
  nums1.sort((x, y) => x - y);
  nums2.sort((x, y) => x - y);
  var x = 0, y = 0, result = [];
  while (x < nums1.length && y < nums2.length) {
    if (nums1[x] < nums2[y]) {
      x++;
    } else if (nums1[x] > nums2[y]) {
      y++;
    } else {
      result.push(nums1[x]);
      x++;
      y++;
    }
  }
  return result;
};
// @lc code=end

