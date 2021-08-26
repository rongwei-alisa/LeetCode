/*
 * @Author: your name
 * @Date: 2021-08-26 14:29:53
 * @LastEditTime: 2021-08-26 18:48:29
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/463.岛屿的周长.js
 */
/*
 * @lc app=leetcode.cn id=463 lang=javascript
 *
 * [463] 岛屿的周长
 */

// @lc code=start
/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function (grid) {
  var area = 0, repeatLine = 0;
  var len = grid.length,
    wid = grid[0].length;
  for (var i = 0; i < len; i++) {
    for (var j = 0; j < wid; j++) {
      if (grid[i][j]) {
        area++;
        if (i - 1 >= 0 && grid[i - 1][j]) {
          repeatLine++;
        }
        if (i + 1 < len && grid[i + 1][j]) {
          repeatLine++;
        }
        if (j - 1 >= 0 && grid[i][j - 1]) {
          repeatLine++;
        }
        if (j + 1 < wid && grid[i][j + 1]) {
          repeatLine++;
        }
      }
    }
  }
  return 4 * area - repeatLine;
};
// @lc code=end

