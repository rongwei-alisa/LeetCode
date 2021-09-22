/*
 * @Author: RongWei
 * @Date: 2021-09-22 09:27:14
 * @LastEditors: RongWei
 * @LastEditTime: 2021-09-22 09:41:21
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=551 lang=javascript
 *
 * [551] 学生出勤记录 I
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var checkRecord = function (s) {
  let absentTimes = 0;
  let lateTimesInSuccession = 0;
  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'L') {
      lateTimesInSuccession++;
      if (lateTimesInSuccession >= 3) {
        return false;
      }
    } else {
      lateTimesInSuccession = 0;
      if (s[i] === 'A') {
        absentTimes++;
        if (absentTimes >= 2) {
          return false;
        }
      }
    }
  }

  return true;
};
// @lc code=end

