//第二個版本:
//TODO: 讀取股票代碼->stock.txt--->利用readfile callback版本

//引用
const axios = require('axios').default;

//NodeJS 內建的 API-Read File
const fs = require('fs');
fs.readFile('stock.txt','UTF-8', (err, stockNo)=>{
    if(err){
        //沒讀到
        console.error('沒讀取到檔案', err);
    }else{
        console.log('有讀取到檔案', stockNo);
        axios
            .get('https://www.twse.com.tw/exchangeReport/STOCK_DAY',{
                //config 通常以物件的方式傳入
                params: {
                    //設定 query srting
                    //devtool->network->payload 
                    response: 'json',
                    date: '20220301',
                    stockNo: stockNo,
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
    }
})




