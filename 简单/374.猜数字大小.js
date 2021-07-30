/*
 * @Author: your name
 * @Date: 2021-07-30 09:42:19
 * @LastEditTime: 2021-07-30 09:48:08
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/374.猜数字大小.js
 */
/*
 * @lc app=leetcode.cn id=374 lang=javascript
 *
 * [374] 猜数字大小
 */

// @lc code=start
/** 
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  var min = 1, max = n, mid, isGuessRight;
  while (min <= max) {
    mid = parseInt((max - min) / 2 + min);
    isGuessRight = guess(mid);
    if (isGuessRight === 0) {
      return mid;
    } else if (isGuessRight > 0) {
      min = mid + 1;
    } else {
      max = mid - 1;
    }
  }
};
// @lc code=end

