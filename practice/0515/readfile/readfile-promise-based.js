//4.利用內建已寫好的promise

//NodeJS 內建的 API-Read File
//內建 已把promise寫入 



const fs = require('fs/promises');

//不需要callback
fs.readFile('text.txt', 'UTF-8')
.then((success)=>{
    console.log(success);
}).catch((error)=>{
    console.log(error);

});

