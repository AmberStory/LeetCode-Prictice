/* 快速排序 */
/*
思路：
比mid大的数全部放右边，比mid小的数全部放左边，以此递归
*/
function quickSort(arr=[]) {
  let mid = arr[0];
  let left = [];
  let right = [];
  if(arr.length <= 1) return arr;
  for(let i=1; i < arr.length; i++) {
    if(arr[i] >= mid) {
      right.push(arr[i]);
    } else {
      left.push(arr[i]);
    }
  }
  left = quickSort(left); 
  right = quickSort(right);
  return [...left, mid, ...right];
}
let arr = [3,21,5,3,76,-1,2];
quickSort(arr);