/*
 * @Author: your name
 * @Date: 2021-06-24 09:22:16
 * @LastEditTime: 2021-06-24 10:09:17
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: /LeetCode/简单/225.用队列实现栈.js
 */
/*
 * @lc app=leetcode.cn id=225 lang=javascript
 *
 * [225] 用队列实现栈
 */

// @lc code=start
/**
 * Initialize your data structure here.
 */
var MyStack = function () {
  this.stack = [];
  this.length = 0;
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function (x) {
  this.stack.push(x);
  this.length++;
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function () {
  if (this.length) {
    var topValue = this.stack.pop();
    this.length--;
    return topValue;
  }
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function () {
  if (this.length) {
    return this.stack[this.length - 1];
  }
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function () {
  return !this.length;
};

/**
 * Your MyStack object will be instantiated and called as such:
 * var obj = new MyStack()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */
// @lc code=end

