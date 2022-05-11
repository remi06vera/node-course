//練習1

let number = [5, 4, 9, 2, 1];

//filter() 篩選
//將下列陣列可以被2整除的數字篩選出來
// function num(x) {
//     return (x % 2 == 0)
// }

//換成arrow function
let num = x =>  (x % 2 == 0)
let newNumber = number.filter(num);
console.log(newNumber); //會篩選出 [ 4, 2 ]

/*============================================*/

//用for loop
let num2 =[];
for(i=0; i<number.length; i++){
    if(number[i] % 2 == 0)
    num2.push(number[i])
}
console.log(num2);  //[ 4, 2 ]


//////////////////////////////////////////////////////////////////
//練習2

let students =[
    {name:"Amy", ages:24, address:"Taipei"},
    {name:"Jenny", ages:22, address:"New Taipei"},
    {name:"Tina", ages:21, address:"Tainan"},
    {name:"fina", ages:25, address:"Taipei"},
]


//用for loop 
let student = [];
for(i=0; i<students.length; i++){
    if(students[i].address == "Taipei")
    student.push(students[i])
}
console.log(student);

//結果:
// (2) [{…}, {…}]
// 0: {name: 'Amy', ages: 24, address: 'Taipei'}
// 1: {name: 'fina', ages: 25, address: 'Taipei'}
// length: 2

/*============================================*/

//filter() 篩選           
//篩選出 住在taipei的人
let result = students.filter(function(a){
    return a.address == "Taipei";
})
console.log(result);

//結果:
// Array(2)
// 0: {name: 'Amy', ages: 24, address: 'Taipei'}
// 1: {name: 'fina', ages: 25, address: 'Taipei'}
// length: 2