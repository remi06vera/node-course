//固定寫法
const express = require('express');
const router = express.Router();
// 連線模組
const pool = require('../utils/db');

//把API放入 app可用的這裡都可用

// RESTful API
// 取得 stocks 的列表
router.get('/', async (request, response, next) => {
  let [data, fields] = await pool.execute('SELECT * FROM stocks');
  response.json(data);
});

//stocks 個別
//放入page
router.get('/:stockId', async (request, response, next) => {
  // 取得網址上的參數 req.params   req.params.stockId
  // console.log('get stocks by id',request.params)
  let [data, fields] = await pool.execute(
    'SELECT * FROM stock_prices WHERE stock_id = ?',
    [request.params.stockId]
  );

  // console.log('query stock by id:', data);
  //1.取得目前在第幾頁 req.query.page，而且利用 || 這個特性來做預設值
  let page = request.query.page || 1;
  console.log('拿到的頁數', page);

  //2.取得目前的總筆數
  let [allResult] = await pool.execute(
    'SELECT * FROM stock_prices WHERE stock_id = ?',
    [request.params.stockId]
  );
  const total = allResult.length;
  console.log('總數量', total);

  //3.計算總共有幾頁
  //使用Math.Ceil
  const perPage = 5; //每頁5筆
  const lastPage = Math.ceil(total / perPage);
  console.log('總頁數', lastPage);

  //4.計算 offset 是多少（計算要跳過幾筆）
  let offset = (page - 1) * perPage;
  console.log('需跳過', offset);

  //5.取得該頁的資料
  let [pageResults] = await pool.execute(
    'SELECT * FROM stock_prices WHERE stock_id = ? ORDER BY date DESC LIMIT ? OFFSET ?',
    [request.params.stockId, perPage, offset]
  );
  //6.回給前端

  //沒資料就404
  if (data.length === 0) {
    response.status(404).json('沒資料');
  } else {
    response.json({
      // 用來儲存所有跟頁碼有關的資訊
      pagination: {
        total,
        lastPage,
        page,
      },
      // 真正的資料
      data: pageResults,
    });
    // response.json(data);
  }
});

module.exports = router;
