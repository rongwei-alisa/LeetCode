/*
 * @Author: your name
 * @Date: 2021-08-23 09:42:05
 * @LastEditTime: 2021-08-23 17:32:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/453.最小操作次数使数组元素相等.js
 */
/*
 * @lc app=leetcode.cn id=453 lang=javascript
 *
 * [453] 最小操作次数使数组元素相等
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var minMoves = function (nums) {
  // var sortNums = nums.sort((num1, num2) => num1 - num2);
  // var maxIndex = sortNums.length - 1;
  // var max = sortNums[maxIndex];
  // if (sortNums[0] === max) return 0;

  // var temp = max, tempIndex = maxIndex, result = false, times = 0;
  // while (!result) {
  //   var isSame = true;
  //   for (var i = 0; i < sortNums.length; i++) {
  //     if (i !== maxIndex) {
  //       sortNums[i]++;
  //       if (sortNums[i] > max) {
  //         temp = sortNums[i];
  //         tempIndex = i;
  //       }
  //     }
  //     if (i > 0 && sortNums[i] !== sortNums[i - 1]) {
  //       isSame = false;
  //     }
  //   }
  //   result = isSame
  //   max = temp;
  //   maxIndex = tempIndex;
  //   times++;
  // }

  // return times;


  var min = nums[0], sum = 0;
  for (var i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (nums[i] < min) {
      min = nums[i];
    }
  }
  return sum - (nums.length) * min;
};
// @lc code=end

