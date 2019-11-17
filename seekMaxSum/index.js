/* 给你一个整数数组 A 和一个整数 K，请在该数组中找出两个元素，使它们的和小于 K 但尽可能地接近 K，返回这两个元素的和。
如不存在这样的两个元素，请返回 -1。 */
/*
思路：
双重循环遍历数组，将两个数相加的结果缓存为cache与sum值相比，满足题意则用cache替换sum的值。
*/

// 请输入一个整数K，数组可能是负数
function maxSum(k) {
  let A = [34,23,1,24,75,33,54,8];
  const len = A.length;
  let sum = 0;
  let cache = 0;

  for(i=0; i<len-1; i++) {
    for(j=i+1; j<len; j++) {
      cache = A[i] + A[j];
      if( cache < k && cache > sum) {
        sum = cache;
      }
    }
  }
  if(!sum) return -1;
  else return sum;
}
