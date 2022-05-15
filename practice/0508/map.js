//map() 會建立一個新的陣列

let number =[2, 5, 8, 12];

//map寫法 
// function double(x){
//     return x * 2
// }
let double = x => x * 2;
numberDouble = number.map(double);
console.log(numberDouble);    

//結果 [ 4, 10, 16, 24 ]

/*============================================*/

//如果用for loop的寫法
let numberDouble=[];
for(i=0; i < number.length; i++){
    //console.log(number[i]*2);
    let num = number[i]*2;
    numberDouble.push(num)
}

console.log(numberDouble);
//結果 [ 4, 10, 16, 24 ]

//console.log(typeof numberDouble);
//object