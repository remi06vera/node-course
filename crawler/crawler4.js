// read stock no from mysql database

// mysql2 是一個第三方套件
// npm i mysql2
// 引用進來
const mysql = require('mysql2/promise');
// 引用axios
const axios = require('axios');

//第三方套件 dotenv-->用來隱藏保密資料
// 幫我們去把 .env 裡的變數讀進來
require('dotenv').config();
(async () => {
  console.log('DB_HOST', process.env.DB_HOST);
  const connection = await mysql.createConnection({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  });
  let [data, fields] = await connection.execute('SELECT * FROM stocks');
  // console.log(data);

  // results [
  //     [],
  //     []
  // ]
  //let data = results[0];
  //let fields = results[1];

  let mapResult = data.map(async (stock, index) => {
    //console.log(stock.id);
    let respond = await axios.get(
      'https://www.twse.com.tw/exchangeReport/STOCK_DAY',
      {
        params: {
          // 設定 query string
          response: 'json',
          date: '20220301',
          stockNo: stock.id,
        },
      }
    );
    return respond.data; //Promise { <pending> }, Promise { <pending> }, Promise { <pending> }
  });
  //promise.all放入陣列
  let priceResult = await Promise.all(mapResult);
  console.log(priceResult);

  connection.end();
})();
