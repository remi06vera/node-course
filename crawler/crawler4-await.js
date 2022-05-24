//第四個版本:
//TODO: 讀取股票代碼->stock.txt--->利用readfile await版本

//TODO:引用第三方模組 axios
const axios = require('axios');

//TODO: 內建模組Read File 不用安裝 -->使用promise版本
const fs = require('fs/promises');

//TODO: 建立async function 可以.then 就可以await
(async ()=>{
    try{
        //成功
        let stockNo= await fs.readFile('stock.txt', 'UTF-8');
        let respond = await axios
        .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY', {
    
            params: {
                // 設定 query string
                response: 'json',
                date: '20220301',
                stockNo: stockNo,
            },
        })
        console.log(respond.data);
    }catch(e){
        //失敗
        console.log(e);
    }

})();

