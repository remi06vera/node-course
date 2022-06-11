// export/import => ESM 的模組管理方式
// 設定預設值
//用變數的方式管理後端網址

// export const API_URL = process.env.REACT_APP_API_URL+"/api"|| 'http://localhost:3001/api';

//再加上變數 讓預設成立
//不要有字串出現 - - >這樣永遠成立 就不會跑到不成立的狀況中
const BASE_URL=process.env.REACT_APP_API_URL || 'http://localhost:3001';
export const API_URL =BASE_URL+'/api'