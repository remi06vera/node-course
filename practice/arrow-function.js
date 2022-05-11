//一般
// function sum(a, b){
//     return a + b
// }

//箭頭函式
// let sum2 = (a, b) =>{
//     return a + b
// }

//因為只有一行陳述式  故可以省略大括號
let sum2 = (a, b) => a + b

/*===============================*/
//一般
// function isPositive(number) {
//     return number >= 0
// }

//箭頭函式
//因為只有一個參數 故可以省略括號
let isPositive = number => number >= 0

/*===============================*/
//一般
// function randomNumber(){
//     return Math.random
// }

//箭頭函式
//沒有參數時  還是需要小括號
let randomNumber = () => Math.random

/*===============================*/
//一般
// document.addEventListener('click', function(){
//     console.log('click');
// })
//箭頭函式
document.addEventListener('click', () => console.log('click'))