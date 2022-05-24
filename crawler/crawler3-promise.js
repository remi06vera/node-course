//第三個版本:讀取股票代碼->stock.txt--->利用readfile promise版本

//TODO:引用第三方模組 axios
const axios = require('axios');

//TODO: 內建模組Read File 不用安裝 -->使用promise版本
const fs = require('fs/promises');

//TODO: 因用promise版本 直接.then 
fs.readFile('stock.txt', 'UTF-8').then((stockNo)=>{
    console.log(stockNo);
    //TODO: 利用axios抓取資料 axios是基於promise-based->故也可改 promise
    return axios
        .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
        params: {
            // 設定 query string
            response: 'json',
            date: '20220301',
            stockNo: stockNo,
        },
    })
   
})
.then((response) => {
    // response 物件
    console.log(response.data);
})
.catch((e) => {
    console.error(e);
});

