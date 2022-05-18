//第五個版本:
//TODO: 讀取股票代碼->stock.txt--->利用readfile內建已經建立好promise版本--> await

//引用
const axios = require('axios').default;

//NodeJS 利用內建已寫好的promise
const fs = require("fs/promises");


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


//不需要callback  
// fs.readFile('stock.txt', 'UTF-8')
// .then((response)=>{
//     console.log(response);
// }).catch((error)=>{
//     console.log(error);

// });

// async  await 版本
async function main(){
    let result = await fs.readFile("stock.txt", "UTF-8");
    console.log(result);
}
main();
