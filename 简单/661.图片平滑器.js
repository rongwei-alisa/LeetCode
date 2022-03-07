/*
 * @Author: RongWei
 * @Date: 2022-02-16 20:04:48
 * @LastEditors: RongWei
 * @LastEditTime: 2022-03-07 10:37:57
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=661 lang=javascript
 *
 * [661] 图片平滑器
 */

// @lc code=start
/**
 * @param {number[][]} img
 * @return {number[][]}
 */
var imageSmoother = function (img) {
  const R = img.length,
    C = img[0].length;
  let result = new Array(R);

  for (let r = 0; r < R; r++) {
    result[r] = new Array(C).fill(0);
    for (let c = 0; c < C; c++) {
      let count = 0;
      for (let nr = r - 1; nr <= r + 1; nr++) {
        for (let nc = c - 1; nc <= c + 1; nc++) {
          if (nr >= 0 && nc >= 0 && nr < R && nc < C) {
            count++;
            result[r][c] += img[nr][nc];
          }
        }
      }
      result[r][c] = Math.floor(result[r][c] / count);
    }
  }

  return result;
};
// @lc code=end

