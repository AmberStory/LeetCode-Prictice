
/*
描述：
给定一个整数数组 nums ，找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。

示例:
输入: [-2,1,-3,4,-1,2,1,-5,4],

输出: 6

解释: 连续子数组 [4,-1,2,1] 的和最大，为 6。

进阶:
如果你已经实现复杂度为 O(n) 的解法，尝试使用更为精妙的分治法求解。
*/

// 解法一：双重循环逐个相加进行比较
function seekMaxSum(arr) {
  if (!Array.isArray(arr)) return;
  const len = arr.length;
  let sum = arr[0];
  let max = arr[0];
  for(let i=0; i<len; i++) {
    sum = arr[i];
    max = arr[i] > max ? arr[i] : max;
    for(let j=i+1; j<len; j++) {
      sum += arr[j];
      max = sum > max ? sum : max;
    }
  }
  return max;
}
seekMaxSum([-2,1,-3,4,-1,2,1,-5,4]);

// 解法二：采用动态规划
function seekMaxSumDynamic(arr) {
  if (!Array.isArray(arr)) return;
  let sum = arr[0];
  let max = arr[0];
  const len = arr.length;
  for(let i=1; i<len; i++) {
    let tmp = sum + arr[i];
    // 第一个子序列：如果前i-1项的和加起来比第i项的值小，那么第i项就下一个子序列的起点；反之，如果如果前i-1项的和加起来比第i项的值大，那么该子序列可以继续向后添加元素，第i项不适合作为下一个子序列的起点。
    sum = tmp > arr[i] ? tmp : arr[i];  
    max = Math.max(sum, max);
  }
  return max;
}