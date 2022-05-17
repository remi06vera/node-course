//3-->讓code 更加彈性

//NodeJS 內建的 API-Read File
//TODO:目標: //改寫成 能很彈性的讀入其他檔案--->建立一個function



const fs = require('fs');

//步驟1 建立function  將路徑設成參數
function getPromise(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'UTF-8', (err, data) => {
            if (err) {
                //錯誤的
                reject(err);
            } else {
                //正確的
                resolve(data);
            }
        });
    })
}


//步驟2 call函式
getPromise('text.txt')
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
console.log(error);
})
