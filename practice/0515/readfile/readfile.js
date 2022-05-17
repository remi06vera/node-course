//基礎1-->使用callback function

//NodeJS 內建的 API-Read File
//TODO:目標: 讀取 同一層資料夾中的text.txt

//fs.readFile(path[, options], callback)

//步驟1:CJS
const fs = require('fs');

//步驟2: 使用Read File -->檔名正確時
fs.readFile('text.txt','UTF-8', (err, data)=>{
    if(err){
        //沒讀到
        console.log(err);
    }else{
        //成功讀到text.txt
        console.log(data);
    }
})
//text.txt 有被讀進readfile.js

//-->檔名錯誤時
fs.readFile('test.txt','UTF-8', (err, data)=>{
    if(err){
        //沒讀到
        console.log(`錯誤`);
        console.log(err);
    }else{
        //成功讀到text.txt
        console.log(data);
    }
})