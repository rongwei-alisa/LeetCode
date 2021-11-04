/*
 * @Author: RongWei
 * @Date: 2021-11-02 09:35:58
 * @LastEditors: RongWei
 * @LastEditTime: 2021-11-04 09:55:49
 * @Description: file content 
 */
/*
 * @lc app=leetcode.cn id=6 lang=javascript
 *
 * [6] Z 字形变换
 */

// @lc code=start
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  const result = new Array(numRows);
  let i = 0, j = 0, isPlus = true;
  while (i < s.length) {
    if (result[j]) {
      result[j].push(s[i]);
    } else {
      result[j] = [s[i]];
    }

    i++;
    if (isPlus) {
      j++;
    } else {
      j--
    }
    if (j === numRows - 1) {
      isPlus = false;
    } else if (j === 0) {
      isPlus = true;
    }
  }
  return result.reduce((all, item) => all.concat(item), []).join('');
};
// @lc code=end

