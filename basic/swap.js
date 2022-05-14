let a = 1;
let b = 2;
console.log("before", a, b); //1, 2

//TODO:

let temp = a; //讓a的值 存一個變數  temp=1
a = b; //再讓b的值裝入a的值  a=2
b = temp; //b=1
console.log("after", a, b); // 2, 1

//ES6寫法
//陣列解構賦值
let family = ["a", "b", "c"];
let [v1, v2, v3] = family;

//陣列變數交換

let fruit = "banana";
let veg = "tomato";
[fruit, veg] = [veg, fruit]; // 左邊是新的變數名，右邊是交換後的值
console.log(fruit, veg);
// "tomato" "banana"

//物件解構賦值
let person = {
  name: "Aming",
  age: 25,
  city: "Taichung",
};

//以前的寫法
let another ={
    name: person.name,
    age: 28,
    city: person.city,
};

//現在
//{name: "Aming", age: 25, city: "Taichung", age:28}
//{name: "Aming", city: "Taichung", age:28}
let another1 = {...person, age: 28}

console.log(another1);
//希望的結果
// let another = {
//   name: "Aming",
//   age: 28,
//   city: "Taichung",
// };
