/*
 * @Author: RongWei
 * @Date: 2021-09-10 11:40:42
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-10 13:41:53
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=507 lang=javascript
 *
 * [507] 完美数
 */

// @lc code=start
/**
 * @param {number} num
 * @return {boolean}
 */
var checkPerfectNumber = function (num) {
  if (num === 1) return false;
  var factor = [1];
  for (var i = 2; i < num / i; i++) {
    if (num % i === 0) {
      factor.push(i, num / i);
    }
  }
  var sum = factor.reduce((sum, num) => sum + num, 0);
  return sum === num;
};
// @lc code=end

