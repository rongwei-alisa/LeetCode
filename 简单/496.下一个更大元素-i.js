/*
 * @Author: rongwei
 * @Date: 2021-09-03 09:18:52
 * @LastEditors: rongwei
 * @LastEditTime: 2021-09-03 10:49:54
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=496 lang=javascript
 *
 * [496] 下一个更大元素 I
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function (nums1, nums2) {
//   var map = {};
//   for (var i = 0; i < nums2.length; i++) {
//     if (i === nums2.length - 1) {
//       map[nums2[i]] = -1;
//       break;
//     }
//     for (var j = i + 1; j < nums2.length; j++) {
//       if (nums2[j] > nums2[i]) {
//         map[nums2[i]] = nums2[j];
//         break;
//       } else {
//         map[nums2[i]] = -1;
//       }
//     }
//   }

//   var result = [];
//   for (var m = 0; m < nums1.length; m++) {
//     result.push(map[nums1[m]]);
//   }

//   return result;
// };

var nextGreaterElement = function (nums1, nums2) {
  var numsMap = {}, stack = [];
  for (var i = 0; i < nums2.length; i++) {
    while (stack.length !== 0 && nums2[i] > stack[stack.length - 1]) {
      var popNum = stack.pop();
      numsMap[popNum] = nums2[i];
    }
    stack.push(nums2[i]);
  }

  var result = [];
  for (var m = 0; m < nums1.length; m++) {
    result.push(numsMap[nums1[m]] ?? -1);
  }

  return result;
};
// @lc code=end

