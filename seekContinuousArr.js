/*
和为K的子数组
给定一个整数数组和一个整数 k，你需要找到该数组中和为 k 的连续的子数组的个数。
示例 1 :

输入:nums = [1,1,1], k = 2

输出: 2 , [1,1] 与 [1,1] 为两种不同的情况。

说明 :
数组的长度为 [1, 20,000]。

数组中元素的范围是 [-1000, 1000] ，且整数 k 的范围是 [-1e7, 1e7]。
*/

// 思路：要求是得连续的数组，所以我们可以从前往后将连续的子元素一个一个相加，刚开始指针指向数组的第一个元素，将前两项相加，如果和小于指定的k，则继续往后加，如果和超过了k，则指针向后移动一位并重新计算与指针后一位元素的和，如果结果等于k，则指针再向后移动一位，一直指到数组的倒数第二位结束。

function seekContinuousArr(arr, k) {
  if (!Array.isArray(arr) || !arr.length) return;
  const arrLen = arr.length;
  let count = 0;
  for(let i=0; i<arrLen; i++) {
    let sum = arr[i];
    if(sum === k) { count++; }
    for(let j = i+1; j<arrLen; j++) {
      sum += arr[j];
      if (sum === k) { count++;}
    }
  }
  return count;
}