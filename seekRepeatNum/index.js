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


/*
  思路：
  二分查找原则：1到n之间有n+1个数，那么我们取n的中间值m，将n+1个数与m进行比较，如果小于等于m的数大于m个，说明重复的数在[1, m]之间，否则在[m+1, n]之间，然后反复这种思路进行查找即可。
*/
function pickRepeatNum(arr) {
  const numLength = arr.length;
  let x = 1;
  let y = numLength-1;
  while(x < y) {
    let sum = 0;
    // 当取数组中间位置的数的时候，可以使用(x+y)/2的方式，但是更推荐使用x+(y-x)/2，避免出现(x+y)会超出int类型表示的最大值，导致整形溢出的问题。
    let m = x+parseInt((y-x)/2, 10);
    for(let i = 0; i<numLength; i++) {
      if(arr[i] <= m) {
        sum++;
      }
    }
    if(sum > m) y = m;
    else x = m+1;
  }
  return x;
}