/*
 * @lc app=leetcode.cn id=389 lang=javascript
 *
 * [389] 找不同
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  var sortT = s.split('').sort();
  var sortS = t.split('').sort();
  var i = 0;
  while (i < sortS.length) {
    if (sortS[i] !== sortT[i]) {
      return sortS[i];
    }
    i++;
  }
  return sortT[i];
};
// @lc code=end

