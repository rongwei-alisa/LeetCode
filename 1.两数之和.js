/*
 * @Description: file content
 * @Author: RongWei
 * @Date: 2020-01-23 20:19:20
 * @LastEditors: RongWei
 * @LastEditTime: 2020-01-23 20:19:28
 */
/*
 * @lc app=leetcode.cn id=1 lang=javascript
 *
 * [1] 两数之和
 *
 * https://leetcode-cn.com/problems/two-sum/description/
 *
 * algorithms
 * Easy (47.41%)
 * Likes:    7519
 * Dislikes: 0
 * Total Accepted:    796K
 * Total Submissions: 1.7M
 * Testcase Example:  '[2,7,11,15]\n9'
 *
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 你可以假设每种输入只会对应一个答案。但是，你不能重复利用这个数组中同样的元素。
 * 
 * 示例:
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    var obj = {};
    for (var i = 0; i < nums.length; i += 1) {
        if ((target - nums[i]) in obj) {
            break;
        } else {
            obj[nums[i]] = i;
        }
    }
    return [obj[target - nums[i]], i];
};
// @lc code=end

