/**
 * 贪心算法，保证每次操作都是局部最优的，从而使最后得到的结果是全局最优的
 * 贪心策略：给剩余孩子里最小饥饿度的孩子分配最小的能饱腹的饼干
 * 把孩子和饼干分别排序，从饥饿度最小的孩子和大小最小的饼干出发，计算有多少个孩子可以被满足
 */
/*
 * @lc app=leetcode.cn id=455 lang=javascript
 *
 * [455] 分发饼干
 */

// @lc code=start
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

