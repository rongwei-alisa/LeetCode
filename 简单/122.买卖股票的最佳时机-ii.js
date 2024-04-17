/*
 * 贪心
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
// var maxProfit = function (prices) {
//   var curMin = prices[0], profit = 0;
//   for (var i = 1; i < prices.length; i++) {
//     if (prices[i] < prices[i - 1]) {
//       profit += prices[i - 1] - curMin;
//       curMin = prices[i];
//     } else if (i === prices.length - 1) {
//       profit += prices[i] - curMin;
//     }
//   }
//   return profit;
// };

var maxProfit = function(prices) {
  let minPrice = prices[0];
  let res = 0;
  for (let i = 1; i < prices.length; i++) {
      if (prices[i] > minPrice) {
          res += prices[i] - minPrice;
          minPrice = prices[i];
      } else {
          minPrice = prices[i];
      }
  }
  return res;
};
// @lc code=end

