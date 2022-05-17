//如何讓 a b的值交換
//以前寫法->透過第三個變數

// let a = 1;
// let b = 2;
// console.log("before", a, b); //1, 2


// let temp = a;  //讓a的值存入一個變數-->temp=1
// a = b;         //再把b的值 裝進 a裡-->a=2
// b = temp;      //temp的值 裝進 b裡-->b=1
// console.log("after", a, b); // 2, 1


//ES6寫法:
//陣列解構賦值  陣列變數交換
//變數交換:使用解構賦值 可以直接交換兩個變數的值
let a = 1;
let b = 2;
[a, b] = [b, a];
console.log(a, b); // 2,1
///////////////////////////////////////////////////

//物件解構賦值

let person = {
    name: "Aming",
    age: 25,
    city: "Taichung",
};

//以前改變age的寫法
let another ={
    name: person.name,
    age: 28,
    city: person.city,
};

//ES6寫法:
//... 展開運算子(Spread Operators)
let another1 = {...person, age: 28};
console.log(another1);