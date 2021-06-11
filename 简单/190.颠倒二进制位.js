/*
 * @lc app=leetcode.cn id=190 lang=javascript
 *
 * [190] 颠倒二进制位
 */

// @lc code=start
/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
var reverseBits = function (n) {
  // var result = 0;
  // for (var i = 0; i < 32; i++) {
  //   // result << 1 : 将每一位逐步左移，也可以一次性移动 31 - i 位
  //   // n & 1 : 取 n 的二进制末位数，n 的末位是 1 ，结果是 1；n 的末位是 0，结果是 0
  //   result = (result << 1) + (n & 1);
  //   // 或：result = result + (n & 1) << (31 - i);
  //   n = n >>> 1;
  // }
  // return result >>> 0;
  let rev = 0;
  for (let i = 0; i < 32 && n > 0; ++i) {
    rev |= (n & 1) << (31 - i);
    n >>>= 1;
  }
  return rev >>> 0;
};
// @lc code=end

