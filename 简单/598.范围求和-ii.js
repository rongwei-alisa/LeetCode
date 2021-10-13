/*
 * @Author: RongWei
 * @Date: 2021-10-13 10:09:15
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-13 19:07:36
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=598 lang=javascript
 *
 * [598] 范围求和 II
 */

// @lc code=start
/**
 * @param {number} m
 * @param {number} n
 * @param {number[][]} ops
 * @return {number}
 */
// 超时
// var maxCount = function (m, n, ops) {
//   let matrix = new Array(m * n).fill(0);
//   for (let op = 0; op < ops.length; op++) {
//     let [a, b] = ops[op];
//     for (let i = 0; i < a; i++) {
//       for (let j = 0; j < b; j++) {
//         matrix[m * i + j]++;
//       }
//     }
//   }

//   let maxNum = 0, maxTimes = 0;
//   for (let k = 0; k < matrix.length; k++) {
//     if (matrix[k] > maxNum) {
//       maxNum = matrix[k];
//       maxTimes = 1;
//     } else if (matrix[k] === maxNum) {
//       maxTimes++;
//     }
//   }
//   return maxTimes;
// };

var maxCount = function (m, n, ops) {
  let a = m, b = n;
  for (let op in ops) {
    a = Math.min(a, ops[op][0]);
    b = Math.min(b, ops[op][1]);
  }

  return a * b;
}
// @lc code=end

