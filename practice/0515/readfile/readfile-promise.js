//基礎2-->使用promise

//NodeJS 內建的 API-Read File
//TODO:目標: 將下列 改寫成 promise版本


const fs = require('fs');

//原來的
// fs.readFile('text.txt', 'UTF-8', (err, data) => {
//     if (err) {
//         console.log(`錯誤了喔`);
//         console.log(err);
//     } else {
//         console.log(data);
//     }
// });

//Promise()版本
//步驟1 promise 起手-> new Promise((resolve, reject)=>{})
//步驟2 promise物件裝進變數->這樣外面才能用
let promise = new Promise((resolve, reject) => {
    //非同步
    fs.readFile('text.txt', 'UTF-8', (err, data) => {
        if (err) {
            //錯誤的
            reject(err);
        } else {
            //正確的
            resolve(data);
        }
    });
})

//步驟3 接成功或失敗
// .then(() => { })
// .catch(() => { })

promise.then((success) => { 
    console.log(`resolve: ${success}`);
}).catch((error) => { 
    console.log(`reject: ${error}  錯誤`);
});

