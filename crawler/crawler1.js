//第一個版本:抓取網址->用params 縮短網址
//寫死股票代碼版本

//引用
const axios = require('axios').default;

//想要抓的網址 //https://www.twse.com.tw/exchangeReport/STOCK_DAY?response=json&date=20220518&stockNo=2330&_=1652883466145
axios.get('https://www.twse.com.tw/exchangeReport/STOCK_DAY',{
    //config 通常以物件的方式傳入
    params:{
        //設定 query srting
        //devtool->network->payload
        response: 'json',
        date: '20220301',
        stockNo: '2330',
    }
})
  .then(function (response) {
      //response是個物件 ->想要純粹的資料在data裡 
    // handle success
    console.log(response.data);
  })
  .catch(function (error) {
    // handle error
    console.log(error);
  })