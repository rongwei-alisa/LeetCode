/*
 * @Author: RongWei
 * @Date: 2021-10-15 09:41:29
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-15 11:49:03
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
  let first1Index = flowerbed.indexOf(1), num = 0;
  if (first1Index === -1) {
    num = 1;
    first1Index = 0;
  }
  for (let i = first1Index - 2; i >= 0; i) {
    if (flowerbed[i] !== 1) {
      if (flowerbed[i - 1] !== 1) {
        num++;
        i = i - 2;
      } else {
        i = i - 1;
      }
    } else {
      i = i - 2;
    }
  }
  for (let i = first1Index + 2; i < flowerbed.length; i) {
    if (flowerbed[i] !== 1) {
      if (flowerbed[i + 1] !== 1) {
        num++;
        i = i + 2;
      } else {
        i = i + 1;
      }
    } else {
      i = i + 2;
    }
  }
  return num >= n;
};
// @lc code=end

