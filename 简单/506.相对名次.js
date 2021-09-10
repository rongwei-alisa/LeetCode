/*
 * @Author: RongWei
 * @Date: 2021-09-10 11:13:57
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-10 11:39:40
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=506 lang=javascript
 *
 * [506] 相对名次
 */

// @lc code=start
/**
 * @param {number[]} score
 * @return {string[]}
 */
var findRelativeRanks = function (score) {
  var sortedScore = [...score].sort((a, b) => b - a);
  var scoreRanks = {}, result = [];
  for (var i = 0; i < sortedScore.length; i++) {
    if (i === 0) {
      scoreRanks[sortedScore[i]] = 'Gold Medal';
    } else if (i === 1) {
      scoreRanks[sortedScore[i]] = 'Silver Medal';
    } else if (i === 2) {
      scoreRanks[sortedScore[i]] = 'Bronze Medal';
    } else {
      scoreRanks[sortedScore[i]] = `${i + 1}`;
    }
  }
  for (var j = 0; j < score.length; j++) {
    result.push(scoreRanks[score[j]]);
  }
  return result;
};
// @lc code=end

