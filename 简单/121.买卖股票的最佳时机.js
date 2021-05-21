/*
 * @Author: your name
 * @Date: 2021-05-21 09:30:15
 * @LastEditTime: 2021-05-21 16:56:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/121.买卖股票的最佳时机.js
 */
/*
 * @lc app=leetcode.cn id=121 lang=javascript
 *
 * [121] 买卖股票的最佳时机
 */

// @lc code=start
/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  if (prices.length === 1) return 0;
  var profit = 0, minPrice = prices[0];
  for (var i = 1; i < prices.length; i++) {
    if (minPrice > prices[i]) {
      minPrice = prices[i];
    } else if (prices[i] - minNumber > profit) {
      profit = prices[i] - minNumber;
    }
  }
  return profit;
};
// @lc code=end

