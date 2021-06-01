/*
 * @Author: your name
 * @Date: 2021-06-01 09:22:09
 * @LastEditTime: 2021-06-01 19:06:23
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/155.最小栈.js
 */
/*
 * @lc app=leetcode.cn id=155 lang=javascript
 *
 * [155] 最小栈
 */

// @lc code=start
/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function (val) {
  const len = this.minStack.length;
  if (len) {
    this.minStack.push(Math.min(val, this.minStack[len - 1]));
  } else {
    this.minStack.push(val);
  }
  this.stack.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.stack.length === 0) {
    return;
  }
  this.stack.pop();
  this.minStack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  const len = this.stack.length;
  if (len === 0) return;
  return this.stack[len - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  const len = this.minStack.length;
  if (len === 0) return;
  return this.minStack[len - 1];
};

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(val)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */
// @lc code=end

