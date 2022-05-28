//TODO:步驟1：導入第三方套件-express
const express = require('express');
//TODO:步驟2：利用Express 建立一個 express applications
const app = express();
const mysql = require('mysql2');
require('dotenv').config();

let pool = mysql
  .createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    //為了pool 新增參數
    connectionLimit: 10,
  })
  .promise();

//HTTP reguest(client--->請求--->server)
//method:get,post,put,delete..

// app.set('view', path.join(__dirname, 'views'));

//一般中間件
app.use((request, respond, next) => {
  console.log('中間件');
  next();
});

//路由中間件 <---網址
//首頁
app.get('/', (request, response, next) => {
  response.send('Home');
});

//About me
app.get('/about', (request, response, next) => {
  response.send('About me');
});

//stocks
app.get('/stocks/:stockId', async (request, response, next) => {
  let [data, fields] = await pool.execute(
    'SELECT * FROM stocks WHERE id = ' + request.params.stockId
  );

  console.log('query stock by id:', data);

  //沒資料就404
  if (data.length === 0) {
    response.status(404).json('沒資料');
  } else {
    response.json(data);
  }
});

//這個一般中間件在所有路由的後面
//會到這裡 表示前面所有路由中間件都沒有比到符合的網址
//404
app.use((request, response, next) => {
  console.log('所有的路由後面===>404', request.path);
  response.status(404).send('Not Found');
});

//5xx
//錯誤處理中間件: 通常也會放在所有中間件後面
//有點接近 try-catch 的catch
app.use((error, request, response, next) => {
  console.error('來自四個參數的錯誤處理中間件', request.path, error); //req.path紀錄requst的路徑-->requst物件裡的屬性path
  response.status(500).send('請洽系統管理員'); //response物件裡的屬性status-->指定狀況
});

//TODO:步驟3：告訴伺服器聽取 3001 這個 Port
app.listen(3001, () => {
  console.log('Server running at port 3001');
});
