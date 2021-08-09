/*
 * @Author: your name
 * @Date: 2021-08-08 22:37:54
 * @LastEditTime: 2021-08-09 11:36:39
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/401.二进制手表.js
 */
/*
 * @lc app=leetcode.cn id=401 lang=javascript
 *
 * [401] 二进制手表
 */

// @lc code=start
/**
 * @param {number} turnedOn
 * @return {string[]}
 */
var readBinaryWatch = function (turnedOn) {
  // var hourMaxTurnOn = 3, miniteMaxTurnOn = 5, result = [];
  // var hourArr = [1, 2, 4, 8], miniteArr = [1, 2, 4, 8, 16, 32];
  // // if (turnedOn > hourMaxTurnOn + miniteMaxTurnOn) {
  // //   return [];
  // // }
  // for (var i = 0; i <= hourMaxTurnOn; i++) {
  //   for (var j = turnedOn-i; j <= miniteMaxTurnOn; j++) {

  //   }
  // }

  // return result;


  var result = [];
  for (var i = 0; i < 12; i++) {
    for (var j = 0; j < 60; j++) {
      if (i.toString(2).split('0').join('').length + j.toString(2).split('0').join('').length === turnedOn) {
        result.push(`${i}:${j < 10 ? '0' + j : j}`);
      }
    }
  }
  return result;


  // if (turnedOn >= 9) {
  //   return []
  // }
  // var result = []
  // var maskAnd = [0xfe, 0xfd, 0xfb, 0xf7, 0xef, 0xdf]
  // var maskOr = [0x1, 0x2, 0x4, 0x8, 0x10, 0x20, 0x40]

  // var hourMaxTurnOn = 3, miniteMaxTurnOn = 5, result = [];
  // var hourMinTurnOn = turnedOn - miniteMaxTurnOn > 0 ? turnedOn - miniteMaxTurnOn : 0;
  // var hourMaxTurnOn = turnedOn > 3 ? hourMaxTurnOn : turnedOn;
  // for (var i = hourMinTurnOn; i <= hourMaxTurnOn; i++) {
  //   var firstHour = 0
  //   var maxIndex = i - 1
  //   var index = maxIndex
  //   for (var hi = 0; hi < i; hi++) {
  //     firstHour += 1 << hi
  //   }
  //   for (var hour = firstHour; hour < 12;) {
  //     // do minute
  //     var firstMinute = 0
  //     var maxMIndex = turnedOn - i - 1
  //     var mindex = maxMIndex
  //     for (var mi = 0; mi < turnedOn - i; mi++) {
  //       firstMinute += 1 << mi
  //     }
  //     for (var minute = firstMinute; minute < 60;) {
  //       var str = "" + hour + ":"
  //       if (minute < 10) {
  //         str += "0"
  //       }
  //       str += minute

  //       result.push(str)
  //       if (minute == 0) {
  //         break
  //       }
  //       minute = (minute | maskOr[mindex + 1]) & maskAnd[mindex]
  //       if (maxMIndex == mindex) {
  //         maxMIndex++
  //       }
  //       mindex--
  //       if (mindex < 0 || ((minute & maskOr[mindex]) == 0)) {
  //         mindex = maxMIndex
  //       }
  //     }
  //     if (hour == 0) {
  //       break
  //     }

  //     hour = (hour | maskOr[index + 1]) & maskAnd[index]
  //     if (maxIndex == index) {
  //       maxIndex++
  //     }
  //     index--
  //     if (index < 0 || ((hour & maskOr[index]) == 0)) {
  //       index = maxIndex
  //     }
  //   }
  // }
  // return result
};
// @lc code=end