/**
 * 考虑所有气球中右边界位置最靠左的那一个，那么一定有一支箭的射出位置就是它的右边界
 * 当我们确定了一支箭之后，我们就可以将这支箭引爆的所有气球移除，并从剩下未被引爆的气球中，再选择右边界位置最靠左的那一个，确定下一支箭，直到所有的气球都被引爆
 */
/*
 * @lc app=leetcode.cn id=452 lang=javascript
 *
 * [452] 用最少数量的箭引爆气球
 */

// @lc code=start
/**
 * @param {number[][]} points
 * @return {number}
 */
// var findMinArrowShots = function(points) {
//     points.sort((a, b) => a[1] - b[1]); 
//     let res = 1;
//     for (let i = 1; i < points.length; i++) {
//         if (points[i][0] > points[i - 1][1]) {
//             res++;
//         } else {
//             points[i][1] = Math.min(points[i][1], points[i - 1][1]);
//         }
//     }
//     return res;
// };
var findMinArrowShots = function(points) {
    points.sort((a, b) => a[1] - b [1]);
    let pos = points[0][1];
    let res = 1;
    for (let balloon of points) {
        if (balloon[0] > pos) {
            res++;
            pos = balloon[1];
        }
    }
    return res;
}
// @lc code=end

