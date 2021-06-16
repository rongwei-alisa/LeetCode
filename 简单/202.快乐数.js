/*
 * @Author: your name
 * @Date: 2021-06-15 09:54:04
 * @LastEditTime: 2021-06-15 20:35:46
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/202.快乐数.js
 */
/*
 * @lc app=leetcode.cn id=202 lang=javascript
 *
 * [202] 快乐数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  var obj = {}, num = n;
  while (!(obj[num])) {
    var sum = 0, tail = num;
    obj[num] = true;

    while (tail) {
      sum += Math.pow(tail % 10, 2);
      tail = Math.floor(tail / 10);
    }
    if (sum === 1) {
      return true;
    }

    num = sum;
  }
  return false;
};
// @lc code=end

