/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-07-27 01:15:58
 * @LastEditors: RongWei
 * @LastEditTime: 2020-07-28 20:33:36
 */
/*
 * @lc app=leetcode.cn id=739 lang=javascript
 *
 * [739] 每日温度
 *
 * https://leetcode-cn.com/problems/daily-temperatures/description/
 *
 * algorithms
 * Medium (64.08%)
 * Likes:    452
 * Dislikes: 0
 * Total Accepted:    90.9K
 * Total Submissions: 141.6K
 * Testcase Example:  '[73,74,75,71,69,72,76,73]'
 *
 * 请根据每日 气温 列表，重新生成一个列表。对应位置的输出为：要想观测到更高的气温，至少需要等待的天数。如果气温在这之后都不会升高，请在该位置用 0
 * 来代替。
 * 
 * 例如，给定一个列表 temperatures = [73, 74, 75, 71, 69, 72, 76, 73]，你的输出应该是 [1, 1, 4,
 * 2, 1, 1, 0, 0]。
 * 
 * 提示：气温 列表长度的范围是 [1, 30000]。每个气温的值的均为华氏度，都是在 [30, 100] 范围内的整数。
 * 
 */

// @lc code=start
/**
 * @param {number[]} T
 * @return {number[]}
 */
var dailyTemperatures = function (T) {
    let stack = [], result = [];
    for (let i = 0; i < T.length; i += 1) {
        let len = stack.length;
        if (T[i] > stack[len - 1]) {
            const r = stack.pop();
            result[r[0]] = i - r[0];

        }
        stack.push([i, T[i]]);
    }
};
// @lc code=end

