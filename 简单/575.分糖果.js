/*
 * @Author: RongWei
 * @Date: 2021-09-30 09:23:47
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-30 10:31:02
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=575 lang=javascript
 *
 * [575] 分糖果
 */

// @lc code=start
/**
 * @param {number[]} candyType
 * @return {number}
 */
var distributeCandies = function (candyType) {
  // let sorted = candyType.sort((a, b) => a - b);
  // let candyTypes = 1;

  // for (let i = 1; i < sorted.length; i++) {
  //   if (sorted[i] !== sorted[i - 1]) {
  //     candyTypes++;
  //   }
  // }
  const candyTypes = new Set(candyType).size;

  return Math.min(candyTypes, candyType.length / 2);
};
// @lc code=end

