/*
 * @Author: RongWei
 * @Date: 2021-10-28 09:17:29
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-28 09:23:07
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=657 lang=javascript
 *
 * [657] 机器人能否返回原点
 */

// @lc code=start
/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function (moves) {
  let horizontalDis = 0;
  let verticalDis = 0;
  for (let i = 0; i < moves.length; i++) {
    if (moves[i] === 'R') {
      horizontalDis++;
    } else if (moves[i] === 'L') {
      horizontalDis--;
    } else if (moves[i] === 'U') {
      verticalDis++;
    } else {
      verticalDis--;
    }
  }
  return horizontalDis === 0 && verticalDis === 0;
};
// @lc code=end

