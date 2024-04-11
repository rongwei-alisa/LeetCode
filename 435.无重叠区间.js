/**
 * 贪心策略：优先保留结尾小且不相交的区间
 * 在选择要保留的区间时，区间的结尾十分重要；选择的区间结尾越小，余留给其他区间的空间就越大。
 */
/*
 * @lc app=leetcode.cn id=435 lang=javascript
 *
 * [435] 无重叠区间
 */

// @lc code=start
/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function(intervals) {
    intervals.sort((a, b) => a[1] - b[1]);
    let count = 0;
    let prev = intervals[0];
    for (let i = 1; i < intervals.length; i++) {
        if (intervals[i][0] < prev[1]) {
            count++;
        } else {
            prev = intervals[i];
        }
    }
    return count;
};
// @lc code=end
