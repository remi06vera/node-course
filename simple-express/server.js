//TODO:步驟1：導入第三方套件-express
const express = require('express');
//TODO:步驟2：利用Express 建立一個 express applications
const app = express();
// 使用第三方開發的中間件 cors
const cors = require('cors');
app.use(cors());

require('dotenv').config();

//TODO: 6/11連線改成模組
const pool = require('./utils/db');

//HTTP reguest(client--->請求--->server)
//method:get,post,put,delete..

//nodejs內建套件(不需 npm i) 用來處理路徑
const path = require('path');

// //express SSR 的做法
// //設定 express pug視圖檔案放在哪裡
// app.set('views', path.join(__dirname, 'views'));
// //設定 express要用哪一種樣版引擎 (template engine)
// //要用的視圖工具叫pug
// app.set('view engine', 'pug');

// 使用 express 內建的中間件 static- - >處理靜態資料
// 方法1: 不要指定網址
//app.use(express.static(path.join(__dirname, 'assets')));
// http://localhost:3001/images/test1.jpg
// 方法2: 指定網址 aaa 用於分類用
//app.use('/aaa', express.static(path.join(__dirname, 'public')));
// http://localhost:3001/aaa/images/callback-hell.png

//TODO: 6/11 express內建中間件 - - >一定要有
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//一般中間件
app.use((request, respond, next) => {
  // console.log('中間件');
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

//錯誤
app.get('/error', (request, response, next) => {
  // 發生錯誤，丟一個錯誤出來
  // throw new Error('測試測試');
  // 或是 next 裡有任何參數
  next('我是正確的');
  // --> 都會跳去錯誤處理中間件
});

//TODO: 6/11模組 stock stock
//api前面網址+api 回傳就是json
const StockRouters = require('./routers/StockRouters');
app.use('/api/stocks', StockRouters);

//引用註冊的後台
const AuthRouter = require('./routers/AuthRouter');
app.use('/api/auth', AuthRouter);
//這個一般中間件在所有路由的後面
//會到這裡 表示前面所有路由中間件都沒有比到符合的網址
//404
app.use((request, response, next) => {
  console.log('所有的路由後面===>404', request.path);
  response.status(404).send('Not Found');
});

//5xx  伺服器端錯誤
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
