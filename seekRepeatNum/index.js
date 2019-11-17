/*
寻找重复数字
给定一个包含 n + 1 个整数的数组 nums，其数字都在 1 到 n 之间（包括 1 和 n），可知至少存在一个重复的整数。假设只有一个重复的整数，找出这个重复的数。
输入 [1,3,4,2,2] 输出  2
*/

/*
  思路：
  将数组转存为对象，以数组的值作为对象的key，循环整个数组，如果存在相同的key，则说明该值是重复值。
*/

// 请输入一个数组
function seekRepeatNum(arr) {
  if(!Array.isArray(arr)) return;
  let obj={};
  let num = 0;
  for(let i=0; i<arr.length; i++) {
    num = arr[i];
    if(!obj[num]) {
      obj[num] = num;
    }
    else {
      return num;
    }
  };
}