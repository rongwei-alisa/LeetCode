/*
 * @Author: your name
 * @Date: 2021-08-02 09:43:44
 * @LastEditTime: 2021-08-02 10:33:16
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/383.赎金信.js
 */
/*
 * @lc app=leetcode.cn id=383 lang=javascript
 *
 * [383] 赎金信
 */

// @lc code=start
/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  const magazineArr = magazine.split('');
  let i = 0, index;
  while (i < ransomNote.length) {
    index = magazineArr.indexOf(ransomNote[i]);
    if (index > -1) {
      magazineArr[index] = '--';
    } else {
      return false;
    }
    i++;
  }
  return true;
};
// @lc code=end

