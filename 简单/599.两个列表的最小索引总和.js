/*
 * @Author: RongWei
 * @Date: 2021-10-15 09:28:00
 * @LastEditors: RongWei
 * @LastEditTime: 2021-10-15 09:39:04
 * @Description: file content
 */
/*
 * @lc app=leetcode.cn id=599 lang=javascript
 *
 * [599] 两个列表的最小索引总和
 */

// @lc code=start
/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  let result = [],
    sumOfIndex = list1.length + list2.length;
  for (let i = 0; i < list1.length; i++) {
    let index = list2.indexOf(list1[i]);
    if (index > -1) {
      if ((index + i) < sumOfIndex) {
        result = [list1[i]];
        sumOfIndex = index + i;
      } else if (index + i === sumOfIndex) {
        result.push(list1[i]);
      }
    }
  }
  return result;
};
// @lc code=end

