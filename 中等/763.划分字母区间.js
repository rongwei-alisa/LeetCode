/**
 * 贪心策略：寻找每个片段可能的最小结束下标
 * 同一个字母只能出现在同一个片段，即同一个字母第一次出现的下标位置和最后一次出现的下标位置必须出现在同一个片段
 */
/*
 * @lc app=leetcode.cn id=763 lang=javascript
 *
 * [763] 划分字母区间
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number[]}
 */
// var partitionLabels = function(s) {
//     const uniqArr = new Set(s); // s 中的字母去重
//     const rangeArr = [];
//     for (let i = 0; i < uniqArr.length; i++) {
//         const char = uniqArr[i];
//         const start = s.indexOf(char);
//         const end = s.lastIndexOf(char);
//         rangeArr.push([start, end]); // 存储每个字母出现的下标范围
//     }
//     const res = [];

// };

var partitionLabels = function(s) {
    const last = new Array(26);
    const length = s.length;
    const codePointA = 'a'.codePointAt(0); // 返回一个非负整数，该整数是从给定索引开始的字符的 Unicode 码位值
    for (let i = 0; i < length; i++) {
        last[s.codePointAt(i) - codePointA] = i; // 在 26 个字母数组中，记录每个字母最后出现的位置
    }
    const partition = []; // 分割 分区
    let start = 0, end = 0;
    for (let i = 0; i < length; i++) {
        end = Math.max(end, last[s.codePointAt(i) - codePointA]);
        if (i === end) { // 下标查找到某个字母所在的最大位置
            partition.push(end - start + 1);
            start = end + 1;
        }
    }
    return partition;
}
// @lc code=end

