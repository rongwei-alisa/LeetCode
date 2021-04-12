/*
 * @Author: your name
 * @Date: 2021-04-01 16:27:56
 * @LastEditTime: 2021-04-12 17:28:02
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/35.搜索插入位置.js
 */
/*
 * @lc app=leetcode.cn id=35 lang=javascript
 *
 * [35] 搜索插入位置
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  // 遍历
  // if (target <= nums[0]) return 0;
  // if (target > nums[nums.length - 1]) return nums.length;
  // var index = 1;
  // while (index < nums.length) {
  //   if (
  //     target === nums[index] ||
  //     (target > nums[index - 1] && target < nums[index])
  //   ) {
  //     break;
  //   }
  //   index++;
  // }
  // return index;

  // 中间指针
  // var low = 0, high = nums.length - 1;
  // if (target <= nums[low]) return low;
  // if (target > nums[high]) return high + 1;

  // while (low < high) {
  //   var mid = Math.floor((low + high) / 2);
  //   if (target > nums[mid]) {
  //     low = mid + 1;
  //   } else {
  //     high = mid;
  //   }
  // }
  // return high;

  // 遍历
  var i = 0;
  while (i < nums.length) {
    if (target <= nums[i]) {
      return i;
    }
    i++;
  }
  return i;
};
// @lc code=end

