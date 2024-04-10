/**
 * 贪心策略：每次遍历中，只考虑并更新相邻一侧的大小关系
 * 把所有孩子的糖果数初始化为 1；
 * 从左往右遍历，如果右边孩子的评分比左边的高，则右边孩子的糖果数更新为左边孩子糖果数 + 1；
 * 从右往左遍历，如果左边孩子的评分比右边的高，且左边孩子当前的糖果数不大于右边孩子的糖果数，则左边孩子的糖果数更新为右边孩子糖果数 + 1；
 */
/*
 * @lc app=leetcode.cn id=135 lang=javascript
 *
 * [135] 分发糖果
 */

// @lc code=start
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    const len = ratings.length;
    const candyArr = new Array(len).fill(1);

    for (let i = 1; i < len; i++) {
        if (ratings[i] > ratings[i - 1]) {
            candyArr[i] = candyArr[i - 1] + 1;
        }
    }
    
    for (let i = len - 2; i >= 0; i--) {
        if (ratings[i] > ratings[i + 1]) {
            candyArr[i] = Math.max(candyArr[i + 1] + 1, candyArr[i]);
        }
    }
    return candyArr.reduce((sum, n) => sum + n);
};
// @lc code=end

