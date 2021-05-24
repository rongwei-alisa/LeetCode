/*
 * @Author: your name
 * @Date: 2021-05-24 09:34:49
 * @LastEditTime: 2021-05-24 10:00:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/122.买卖股票的最佳时机-ii.js
 */
/*
 * @lc app=leetcode.cn id=122 lang=javascript
 *
 * [122] 买卖股票的最佳时机 II
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  var curMin = prices[0], profit = 0;
  for (var i = 1; i < prices.length; i++) {
    if (prices[i] < prices[i - 1]) {
      profit += prices[i - 1] - curMin;
      curMin = prices[i];
    } else if (i === prices.length - 1) {
      profit += prices[i] - curMin;
    }
  }
  return profit;
};
// @lc code=end

