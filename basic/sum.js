//目標
// 回傳 1 + 2 + ... + n 的結果
// function sum(n) {

//     // return 結果
//   }
/*=========================================*/

// 方法1 公式解
//O(1) big O 1
// function sum(n) {
//   return (n * (n + 1)) / 2;
// }

//1*(1+1)/2=1
//2*(2+1)/2=3
//10*(10+1)/2=55

/*=========================================*/

//方法2 for 方法
////O(n) big O n
// function sum(n) {
//   let j = 0;
//   for (let i = 1; i <= n; i++) {
//     j += i;
//   }
//   return j;
// }

/*=========================================*/

//方法3 reduce() 方法 很慢
// function sum(n) {
//   //[1, 2, 3,...n].reduce((sum, item) => sum + item, 0);
//   retuen Array.from({ length: n }, (_, i) => i + 1).reduce((sum, item) => sum + item)
// }

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(10)); // 55
console.log(sum(100)); // 5050
