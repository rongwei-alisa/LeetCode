/*
 * @Author: RongWei
 * @Date: 2021-09-14 09:17:58
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-14 09:34:40
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=520 lang=javascript
 *
 * [520] 检测大写字母
 */

// @lc code=start
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function (word) {
  if (word.length === 1) return true;

  var firstLetter = word.charCodeAt(0) >= 97 ? 'S' : 'B';
  var secondLetter = word.charCodeAt(1) >= 97 ? 'S' : 'B';
  if (firstLetter === 'S' && secondLetter === 'B') return false;

  for (var i = 2; i < word.length; i++) {
    if (firstLetter === 'B' && secondLetter === 'B') {
      if (word.charCodeAt(i) >= 97) {
        return false;
      }
    } else if (word.charCodeAt(i) <= 90) {
      return false;
    }
  }

  return true;
};
// @lc code=end

