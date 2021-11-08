/*
 * @Author: RongWei
 * @Date: 2021-11-08 09:33:38
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-08 09:40:45
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=682 lang=javascript
 *
 * [682] 棒球比赛
 */

// @lc code=start
/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function (ops) {
  let result = [];
  for (let i = 0; i < ops.length; i++) {
    let index = result.length - 1;
    if (ops[i] === '+') {
      result.push(result[index] + result[index - 1]);
    } else if (ops[i] === 'D') {
      result.push(2 * result[index]);
    } else if (ops[i] === 'C') {
      result.pop();
    } else {
      result.push(Number(ops[i]));
    }
  }

  let sum = 0;
  for (let j = 0; j < result.length; j++) {
    sum += result[j];
  }
  return sum;
};
// @lc code=end

