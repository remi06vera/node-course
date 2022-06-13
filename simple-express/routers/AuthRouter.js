//固定寫法
const express = require('express');
const router = express.Router();

// 連線模組
const pool = require('../utils/db');

// npm i bcrypt 引用
const bcrypt = require('bcrypt');

// for image upload
// https://www.npmjs.com/package/multer
// npm i multer
const multer = require('multer');
//圖片上傳要找地方放 在public建立上傳資料夾- - >設定圖片儲存地方
//處理路徑
const path = require('path');
// 圖片上傳需要地方放，在 public 裡，建立了 uploads 檔案夾
// 設定圖片儲存的位置
const storage = multer.diskStorage({
  // 設定儲存的目的地 （檔案夾）
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, '..', 'public', 'members'));
  },
  // 重新命名使用者上傳的圖片名稱
  filename: function (req, file, cb) {
    // console.log('multer filename', file);
    // 通常我們會選擇重新命名使用者上傳的圖片名稱
    // 以避免重複的檔名或是惡意名稱，也比較好管理
    let ext = file.originalname.split('.').pop();
    let newFilename = `${Date.now()}.${ext}`;
    cb(null, newFilename);

    //clg結果
    // {
    //   fieldname: 'photo',
    //   originalname: 'japan04-200.jpg',
    //   encoding: '7bit',
    //   mimetype: 'image/jpeg'
    // }
  },
});
const uploader = multer({
  // 設定儲存的位置
  storage: storage,
  // 過濾圖片
  // 可以想成是 photo 這個欄位的「資料驗證」
  fileFilter: function (req, file, cb) {
    if (file.mimetype !== 'image/jpeg' && file.mimetype !== 'image/jpg' && file.mimetype !== 'image/png') {
      cb('這些是不被接受的格式', false);
    } else {
      // cb(錯誤, 結果)
      cb(null, true);
    }
  },
  // 檔案尺寸的過濾
  // 一般不會上傳太大的圖片尺寸，以免到時候前端開啟得很慢
  limits: {
    // 1k = 1024
    fileSize: 200 * 1024,
  },
});


//npm i express-validator
//驗證的格式- - >第三方套件  express-validator
const { body, validationResult } = require('express-validator');

const registerRules = [
  body('email').isEmail().withMessage('Email 欄位請填寫正確格式'),
  body('password').isLength({ min: 8 }).withMessage('密碼長度至少為8'),
  body('confirmPassword')
    .custom((value, { req }) => {
      return value === req.body.password;
    })
    .withMessage('密碼驗證不一致'),
];

////把API放入 app可用的這裡都可用
router.post('/register', uploader.single('photo'), registerRules, async (req, res, next)=> {

  console.log('register body:', req.body);

  //驗證資料  拿到驗證結果
  const validateResults = validationResult(req);
  console.log('validateResults', validateResults);
  if (!validateResults.isEmpty()) {
    // 不是 empty --> 表示有不符合
    let error = validateResults.array();
    return res.status(400).json(error);
  }

  //確認 email 有沒有註冊過
  let [members] = await pool.execute('SELECT id, email FROM members WHERE email = ?', [req.body.email]);
  if (members.length !== 0) {
    // 這個 email 有註冊過
    return res.status(400).json({ code: 3002, error: '這個 email 已經註冊過' });
  }

    //密碼雜湊 hash
    let hashPassword = await bcrypt.hash(req.body.password, 10);
    console.log('hashPassword: ', hashPassword);


  // TODO: save to db
  // 圖片處理完成後，會被放在 req 物件裡
  console.log('req.file', req.file);
  // 最終前端需要的網址: http://localhost:3001/public/members/1655003030907.jpg
  // 可以由後端來組合這個網址，也可以由前端來組合
  // 記得不要把 http://locahost:3001 這個存進資料庫，因為正式環境部署會不同
  // 目前這個專案採用：儲存 members/1655003030907.jpg 這樣格式
  // 使用者不一定有上傳圖片，所以要確認 req 是否有 file
  let photo = req.file ? '/members/' + req.file.filename : '';

  // save to db
  let [result] = await pool.execute('INSERT INTO members (email, password, name, photo) VALUES (?, ?, ?, ?)', [req.body.email, hashPassword, req.body.name, photo]);
  console.log('insert result:', result);
  
  // response
  res.json({ code:0, result: 'OK' });
});
module.exports = router;
