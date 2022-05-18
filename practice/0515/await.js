//promise 很難做條件控制-->用async / await 解決

let time = new Date().toLocaleString();
console.log(`完成工作: 起床於 ${time}`);

//基於promise
let doWork = (job, delay) => {
  return new Promise((resolve, reject) => {
    //做非同步工作
    setTimeout(() => {
      let time = new Date().toLocaleString();
      let result = `完成工作: ${job} ${time}`;
      //成功
      //resolve(result);
      reject("故意失敗");
    }, delay);
  });
};

//刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)

//須將 await程式放入async的function裡

// async function main() {
//   let doBrush = doWork("刷牙", 3000); //用一個變數去接 await程式
//   let result = await doBrush;
//   //可以在這裡接到promise 結果
//   console.log(result);
// }
// main(); //執行函式

//(async (){})();

//用try-catch 用來 用正確處理及錯誤處理
async function main(){
    try{

        let doBrush = await doWork("刷牙", 3000);
        console.log(doBrush);
    
        let doEat = await doWork("吃早餐", 5000);
        console.log(doEat);
    
        let doWrite = await doWork("寫功課", 3000);
        console.log(doWrite);
    }catch(e){
        console.log("這裡是try-catch", e);
    }
}

main();
