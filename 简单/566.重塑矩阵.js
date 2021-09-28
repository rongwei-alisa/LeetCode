/*
 * @Author: RongWei
 * @Date: 2021-09-28 10:43:34
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-28 16:09:16
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=566 lang=javascript
 *
 * [566] 重塑矩阵
 */

// @lc code=start
/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
  const oriRow = mat.length;
  const oriCol = mat[0].length;
  if (oriRow * oriCol !== r * c) return mat;

  let result = [[]], row = 0, column = 0;
  const datas = mat.reduce((arr, currentArr) => arr.concat(currentArr), []);

  for (let i = 0; i < datas.length; i++) {
    result[row].push(datas[i]);
    column++;

    if (column === c) {
      column = 0;
      row++;
      if (row < r) {
        result.push([]);
      }
    }
  }

  return result;
};
// @lc code=end

