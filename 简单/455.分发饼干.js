/*
 * @Author: your name
 * @Date: 2021-08-23 09:42:51
 * @LastEditTime: 2021-08-23 10:23:09
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/455.分发饼干.js
 */
/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
/**
 * 贪心算法，保证每次操作都是局部最优的，从而使最后得到的结果是全局最优的
 * 给剩余孩子里最小饥饿度的孩子分配最小的能饱腹的饼干
 */
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var sortArr = function (num1, num2) {
  return num1 - num2;
};

var findContentChildren = function (g, s) {
  var sortG = g.sort(sortArr);
  var sortS = s.sort(sortArr);
  var i = 0, j = 0;
  while (i <= sortG.length && j <= sortS.length) {
    if (sortS[j] >= sortG[i]) {
      i++;
      j++;
    } else {
      j++;
    }
  }
  return i;
};
// @lc code=end

