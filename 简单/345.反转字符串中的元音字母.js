/*
 * @Author: your name
 * @Date: 2021-07-27 09:40:44
 * @LastEditTime: 2021-07-27 09:59:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/345.反转字符串中的元音字母.js
 */
/*
 * @lc app=leetcode.cn id=345 lang=javascript
 *
 * [345] 反转字符串中的元音字母
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
  var vowel = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'],
    sArr = s.split('');
  var head = 0,
    tail = sArr.length - 1,
    temp;
  while (head <= tail) {
    if (vowel.includes(sArr[head]) && vowel.includes(sArr[tail])) {
      temp = sArr[head];
      sArr[head] = sArr[tail];
      sArr[tail] = temp;
      head++;
      tail--;
    } else {
      if (!vowel.includes(sArr[head])) {
        head++;
      }
      if (!vowel.includes(sArr[tail])) {
        tail--;
      }
    }
  }
  return sArr.join('');
};
// @lc code=end

