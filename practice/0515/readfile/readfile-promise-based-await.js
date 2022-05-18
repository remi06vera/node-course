//利用內建已寫好的promise
//TODO: 寫成await版本


const fs = require("fs/promises");

//async()=>{}
//立即執行

(async()=>{
    let p =await fs.readFile("text.txt", "UTF-8");
    console.log(p); 
})();

//用變數把await裝進去
// let p = fs.readFile("text.txt", "UTF-8");
// console.log(p); //還未加await時->Promise { <pending> }