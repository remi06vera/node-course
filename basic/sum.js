// 回傳 1 + 2 + ... + n 的結果
// function sum(n) {

//     // return 結果
//   }

// 方法1
// function sum(n) {
//   return (n * (n + 1)) / 2;
// }

//1*(1+1)/2=1
//2*(2+1)/2=3
//10*(10+1)/2=55

//方法2
function sum(n) {
  let j = 0;
  for (let i = 1; i <= n; i++) {
    j += i;
  }
  return j;
}

console.log(sum(1)); // 1
console.log(sum(2)); // 3
console.log(sum(10)); // 55
console.log(sum(100)); // 5050
