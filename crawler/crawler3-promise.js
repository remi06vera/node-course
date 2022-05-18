//第三個版本:
//TODO: 讀取股票代碼->stock.txt--->利用readfile promise版本

//引用
const axios = require('axios').default;

//NodeJS 內建的 API-Read File
const fs = require('fs');

//步驟1 promise 起手-> new Promise((resolve, reject)=>{})
//建立function  將路徑設成參數
function getPromise(filepath){
    return new Promise((resolve, reject) => {
        fs.readFile(filepath, 'UTF-8', (err, stockNo) => {
            if (err) {
                //錯誤的
                reject(err);
            } else {
                //正確的
                resolve('有讀取到檔案',stockNo);
                axios
                    .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
                        //config 通常以物件的方式傳入
                        params: {
                            //設定 query srting
                            //devtool->network->payload 
                            response: 'json',
                            date: '20220301',
                            stockNo: stockNo,
                        }
                    })
                    .then(function (response) {

                        console.log(response.data);
                    })
                    .catch(function (error) {

                        console.log(error);
                    })
            }
        });
    })
}

//步驟2 call函式
getPromise('stock.txt')
.then((result)=>{
    console.log(result);
})
.catch((error)=>{
console.log(error);
})



