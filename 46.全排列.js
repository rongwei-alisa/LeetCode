/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-02-09 16:19:24
 * @LastEditors  : RongWei
 * @LastEditTime : 2020-02-09 16:30:28
 */
/*
 * @lc app=leetcode.cn id=46 lang=javascript
 *
 * [46] 全排列
 *
 * https://leetcode-cn.com/problems/permutations/description/
 *
 * algorithms
 * Medium (73.65%)
 * Likes:    513
 * Dislikes: 0
 * Total Accepted:    74.7K
 * Total Submissions: 101.1K
 * Testcase Example:  '[1,2,3]'
 *
 * 给定一个没有重复数字的序列，返回其所有可能的全排列。
 * 
 * 示例:
 * 
 * 输入: [1,2,3]
 * 输出:
 * [
 * ⁠ [1,2,3],
 * ⁠ [1,3,2],
 * ⁠ [2,1,3],
 * ⁠ [2,3,1],
 * ⁠ [3,1,2],
 * ⁠ [3,2,1]
 * ]
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @return {number[][]}
 */

function backTrack(list, temp, nums) {
    if (temp.length === nums.length) {
        return list.push([...temp]);
    }
    for (let i = 0; i < nums.length; i++) {
        if (temp.includes(nums[i])) continue;
        temp.push(nums[i]);
        backTrack(list, temp, nums);
        temp.pop();
    }
}
var permute = function (nums) {
    let list = [];
    backTrack(list, [], nums);
    return list;
};
// @lc code=end

