/*
 * @lc app=leetcode.cn id=605 lang=javascript
 *
 * [605] 种花问题
 */

// @lc code=start
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
// var canPlaceFlowers = function (flowerbed, n) {
//   let first1Index = flowerbed.indexOf(1), num = 0;
//   if (first1Index === -1) {
//     num = 1;
//     first1Index = 0;
//   }
//   for (let i = first1Index - 2; i >= 0; i) {
//     if (flowerbed[i] !== 1) {
//       if (flowerbed[i - 1] !== 1) {
//         num++;
//         i = i - 2;
//       } else {
//         i = i - 1;
//       }
//     } else {
//       i = i - 2;
//     }
//   }
//   for (let i = first1Index + 2; i < flowerbed.length; i) {
//     if (flowerbed[i] !== 1) {
//       if (flowerbed[i + 1] !== 1) {
//         num++;
//         i = i + 2;
//       } else {
//         i = i + 1;
//       }
//     } else {
//       i = i + 2;
//     }
//   }
//   return num >= n;
// };

// 贪心
// var canPlaceFlowers = function (flowerbed, n) {
//   let prev = -1; // 上一个 1 的位置
//   let count = 0; // 可种植花的个数
//   for (let i = 0; i < flowerbed.length; i++) {
//     if (flowerbed[i] === 1) {
//       if (prev === -1) {
//         count += Math.floor(i / 2);
//       } else {
//         count += Math.floor((i - prev - 2) / 2);
//       }
//       if (count >= n) return true;
//       prev = i;
//     }
//   }

//   if (prev === -1) {
//     // 所有全是 0 
//     count += Math.floor((flowerbed.length + 1) / 2);
//   } else {
//     count += Math.floor((flowerbed.length - prev - 1) / 2);
//   }
//   return count >= n;
// }

var canPlaceFlowers = function(flowerbed, n) {
  for (let i = 0; i < flowerbed.length; i++) {
      let left = flowerbed[i - 1] || 0;
      let right = flowerbed[i + 1] || 0;
      if (flowerbed[i] === 0 && left === 0 && right === 0) {
          flowerbed[i] = 1;
          n--;
      }
      if (n <= 0) return true;
  }
  return false;
};
// @lc code=end

