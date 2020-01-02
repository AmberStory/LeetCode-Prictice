/* 
w51-最少硬币找零问题

描述：
在假设的货币体系下，硬币的面额由 1 元、2 元、5 元、10 元、20 元、50 元组成。请计算：如果需要给客户找零钱，金额为 P，则最少需要多少枚硬币？

可以认为 0 ≤ P ≤ 100。

示例
硬币：coins = [1, 2, 5, 10, 20, 50];

金额：P = 6

则最少需要 2 枚硬币，因为 1 + 5 = 6

硬币：coins = [1, 2, 5, 10, 20, 50];

金额：P = 5

则最少需要 1 枚硬币

提示
贪心算法可以找到问题的一个解，但是这里需要的是“最少”，因此是寻找最优解，建议使用动态规划。
*/

// function changeCoins(coins, p) {
//   if (!Array.isArray(coins)) return;
//   let r = [0];
//   let max = p+1;
//   let temp = p+1; // 假设找 p 元钱最少需要 p+1 枚硬币
//   let flag = true;
//   for(let i=1; i<=p; i++) {
//     r[i] = max;
//     flag = true;
//     if(coins.includes(i)) {
//       // 如果面值中直接有需要找的零钱，则最少需要 1 枚硬币
//       r[i] = 1;
//     } else {
//       for(let j=1; j<i; j++) {
//         if(r[j] === max || r[i-j] === max) continue;
//         if(flag) {
//           temp = r[j]+r[i-j];
//           flag = false;
//         }
//         temp = Math.min(temp, r[j]+r[i-j])
//       }
//       r[i] = temp;
//     }
//   }
  
//   return r[p] === max ? -1 : r[p];
// } 


changeCoins([186, 419, 83, 408], 6249);

function changeCoins(coins, p) {
  if (!Array.isArray(coins)) return;
  let r = [0];
  const max = p+1; // 假设找 p 元钱最少需要 p+1 枚硬币
  let temp = max; 
  const coinLen = coins.length;
  for(let i=1; i<=p; i++) {
    if(coins.includes(i)) {
      // 如果面值中直接有需要找的零钱，则最少需要 1 枚硬币
      r[i] = 1;
      continue;
    }
    r[i] = max;
    temp = max;
    for(let j=0; j<coinLen; j++) {
      let diff = i-coins[j];  // 需要找零的金额 - 硬币面额
      if (diff > 0 && r[diff] !== max) {  // 只有硬币面额中存在比需要找零的面额更小的面额时，才可能找开
        temp = Math.min(temp, r[diff]+1); // 加 1 表示coins[j]这枚硬币
      }
    }
    r[i] = temp;
  }
  
  return r[p] === max ? -1 : r[p];
} 