//find() 與 filter()很像  但只會回傳第一個滿足條件的值

let students =[
    {name:"Amy", ages:24, address:"Taipei"},
    {name:"Jenny", ages:22, address:"New Taipei"},
    {name:"Tina", ages:21, address:"Tainan"},
    {name:"fina", ages:25, address:"Taipei"},
]

//find()            
//找出 住在taipei的人
let result = students.find(function(a){
    return a.address == "Taipei";
})
console.log(result);

//結果:
// {name: 'Amy', ages: 24, address: 'Taipei'}