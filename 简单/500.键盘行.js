/*
 * @Author: rongwei
 * @Date: 2021-09-06 09:32:23
 * @LastEditors: rongwei
 * @LastEditTime: 2021-09-06 10:13:29
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=500 lang=javascript
 *
 * [500] 键盘行
 */

// @lc code=start
/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function (words) {
  var result = [];
  var wordMap = {};
  var keyboardLine = ['qwertyuiop', 'asdfghjkl', 'zxcvbnm'];
  for (var m = 0; m < keyboardLine.length; m++) {
    for (var n = 0; n < keyboardLine[m].length; n++) {
      wordMap[keyboardLine[m][n]] = m;
    }
  }

  for (var i = 0; i < words.length; i++) {
    var _words = words[i].toLowerCase();
    var line = wordMap[_words[0]];
    var sameLine = _words.length === 1 ? true : false;
    for (var j = 1; j < _words.length; j++) {
      if (wordMap[_words[j]] !== line) {
        break;
      } else if (j === _words.length - 1) {
        sameLine = true;
      }
    }
    if (sameLine) {
      result.push(words[i]);
    }
  }

  return result;
};
// @lc code=end

