/*
 * @Author: your name
 * @Date: 2021-07-27 10:00:45
 * @LastEditTime: 2021-07-27 10:08:34
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/349.两个数组的交集.js
 */
/*
 * @lc app=leetcode.cn id=349 lang=javascript
 *
 * [349] 两个数组的交集
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  var storeObj = {}, result = [];
  for (var i = 0; i < nums1.length; i++) {
    if (!storeObj[nums1[i]]) {
      storeObj[nums1[i]] = true;
      if (nums2.indexOf(nums1[i]) > -1) {
        result.push(nums1[i]);
      }
    }
  }
  return result;
};
// @lc code=end

