/*
 * @Author: RongWei
 * @Date: 2021-09-13 09:32:46
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-14 10:16:48
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=509 lang=javascript
 *
 * [509] 斐波那契数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// 递归
// var fib = function (n) {
//   if (n === 0) return 0;
//   if (n === 1) return 1;
//   return fib(n - 1) + fib(n - 2);
// };

// 递推
var fib = function (n) {
  var arr = new Array();
  for (var i = 0; i <= n; i++) {
    if (i < 2) {
      arr[i] = i;
    } else {
      arr[i] = arr[i - 1] + arr[i - 2];
    }
  }
  return arr[n];
}
// @lc code=end

