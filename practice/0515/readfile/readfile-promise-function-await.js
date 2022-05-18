//使用await async

//NodeJS 內建的 API-Read File
//TODO:目標: 改寫成 await async版本

const fs = require("fs");

//步驟1 基於 promise 
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

//步驟2 設立async function
// async function main(){
//     let result = await getPromise('text.txt');
//     console.log(result);
// }

// main();

//步驟3 用try catch 接成功和錯誤
async function main(){
    try{
        let result = await getPromise('text.txt');
        console.log(result);
    }catch(e){
        console.log('錯誤', e);
    }
}
main();
