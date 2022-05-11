//reduce()
//可以讓陣列中的每個元素與回傳的值再次作運算
//將陣列->單一值，常常拿來應用於陣列中每個元素的「累加」或是「比較」

let number = [5, 4, 1, 2, 9];

//for loop
let sum = 0;
for (let i = 0; i < number.length; i++) {
    sum += number[i];
}
console.log(sum);
//結果 21
/*=============================================*/

//reduce()
// function sum(acc, val) {
//     return acc + val;
// }
let sum2 = (acc, val) => acc + val;
let answer = number.reduce(sum2, 0);
console.log(answer);
//初始值給0
//結果 21

//////////////////////////////////////////////////////////////////
let data = [
    { id: 1, title: 'AAAA', price: 100, count: 2 },
    { id: 2, title: 'BBBB', price: 300, count: 1 },
    { id: 3, title: 'CCCC', price: 200, count: 1 },
    { id: 4, title: 'DDDD', price: 500, count: 2 },
]
//原本宣告
// function product(acc, item) {
//     return acc +item.price * item.count;
// }

//箭頭
// let product = (acc, item)=> acc +item.price * item.count

// let result = data.reduce(product, 0);
// console.log(result);

let result = data.reduce((acc, item) => acc + item.price * item.count, 0);
console.log(result);
//結果1700

/*=============================================*/
//for loop
// let total = 0;
// for (i = 0; i < data.length; i++) {
//     //console.log(data[i].price);
//     //console.log(data[i].count);
//     total += data[i].price * data[i].count
// }
// console.log(total);

/*=============================================*/
//for in loop
let total = 0;
for (let i in data) {
    //console.log(data[i].price);
    //console.log(data[i].count);
    total += data[i].price * data[i].count
}
console.log(total);
//結果1700