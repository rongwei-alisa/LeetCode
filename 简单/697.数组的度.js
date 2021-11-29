/*
 * @Author: RongWei
 * @Date: 2021-11-29 09:42:39
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-29 11:48:44
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=697 lang=javascript
 *
 * [697] 数组的度
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let map = {};
  for (const [i, num] of nums.entries()) {
    if (map[num]) {
      map[num][0]++;
      map[num][2] = i;
    } else {
      map[num] = [1, i, i];
    }
  }

  let maxNum = 0, minLen = 0;
  for (const [count, left, right] of Object.values(map)) {
    if (count > maxNum) {
      maxNum = count;
      minLen = right - left + 1;
    } else if (maxNum === count) {
      minLen = Math.min(minLen, right - left + 1);
    }
  }
  return minLen;
};
// @lc code=end

