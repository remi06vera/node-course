//第四個版本:
//TODO: 讀取股票代碼->stock.txt--->利用readfile await版本

//引用
const axios = require('axios').default;

//NodeJS 內建的 API-Read File
const fs = require('fs');

//步驟1 基於promise -->不動
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

//步驟2 設立async function
async function main(){
    try{
        let result = await getPromise('stock.txt');
        console.log(result);
    }catch(e){
        console.log('錯誤',e);
    }
}

main();

