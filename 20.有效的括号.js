/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-01-23 20:21:32
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-01-23 20:24:29
 */
/*
 * @lc app=leetcode.cn id=20 lang=javascript
 *
 * [20] 有效的括号
 *
 * https://leetcode-cn.com/problems/valid-parentheses/description/
 *
 * algorithms
 * Easy (40.57%)
 * Likes:    1334
 * Dislikes: 0
 * Total Accepted:    188K
 * Total Submissions: 463.4K
 * Testcase Example:  '"()"'
 *
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
 * 有效字符串需满足：
 * 
 * 
 * 左括号必须用相同类型的右括号闭合。
 * 左括号必须以正确的顺序闭合。
 * 
 * 
 * 注意空字符串可被认为是有效字符串。
 * 
 * 示例 1:
 * 
 * 输入: "()"
 * 输出: true
 * 
 * 
 * 示例 2:
 * 
 * 输入: "()[]{}"
 * 输出: true
 * 
 * 
 * 示例 3:
 * 
 * 输入: "(]"
 * 输出: false
 * 
 * 
 * 示例 4:
 * 
 * 输入: "([)]"
 * 输出: false
 * 
 * 
 * 示例 5:
 * 
 * 输入: "{[]}"
 * 输出: true
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    var brackets = {
        ')': '(',
        ']': '[',
        '}': '{'
    };
    var stack = [];
    for (var i = 0; i < s.length; i += 1) {
        if (!(s[i] in brackets)) {
            stack.push(s[i]);
        } else {
            var target = stack.pop();
            if (target !== brackets[s[i]]) {
                return false;
            }
        }
    }
    return !stack.length;
};
// @lc code=end

