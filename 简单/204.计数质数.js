/*
 * @Author: your name
 * @Date: 2021-06-17 16:04:35
 * @LastEditTime: 2021-06-18 15:40:37
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/204.计数质数.js
 */
/*
 * @lc app=leetcode.cn id=204 lang=javascript
 *
 * [204] 计数质数
 */

// @lc code=start
/**
 * @param {number} n
 * @return {number}
 */
// var isPrime = function (num) {
//   var i = 2;
//   while (i * i <= num) {
//     if (num % i === 0) {
//       return false;
//     }
//     i++;
//   }
//   return true;
// }
// // 暴力法--未通过测试用例
// var countPrimes = function (n) {
//   if (n <= 2) return 0;
//   var result = 1;
//   for (var i = 3; i < n; i++) {
//     // 奇数判断是否是质数，偶数不判断
//     if (i & 1 === 1 && isPrime(i)) {
//       result++;
//     }
//   }
//   return result;
// };

// 埃氏筛
var countPrimes = function (n) {
  var isPrime = new Array(n).fill(1);
  var result = 0;
  for (var i = 2; i < n; i++) {
    if (isPrime[i]) {
      result++;
      for (var j = i * i; j < n; j += i) {
        isPrime[j] = 0;
      }
    }
  }
  return result;
}

// @lc code=end

