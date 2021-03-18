/*
 * @Author: your name
 * @Date: 2021-03-18 11:12:38
 * @LastEditTime: 2021-03-18 11:28:18
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/7.整数反转.js
 */
/*
 * @lc app=leetcode.cn id=7 lang=javascript
 *
 * [7] 整数反转
 */

// @lc code=start
/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
	var xToString = x + '';
	var xNumPart = xToString, hasSymbol = false;
	var xTransferString, xTransfer;

	if(xToString[0] === '-'){
		xNumPart = xToString.substr(1);
		hasSymbol = true;
	}

	xTransferString = xNumPart.split('').reverse().join('');
	xTransfer = hasSymbol ? -Number(xTransferString) : Number(xTransferString);
	
	if(xTransfer > (Math.pow(2, 31) - 1) || xTransfer < -Math.pow(2, 31)) {
		return 0;
	} else {
		return xTransfer;
	}
};
// @lc code=end

