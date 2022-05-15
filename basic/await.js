let dt = new Date();
console.log(`起床了 at ${dt.toISOString()}`);

//還是要有一個promise
let doWork = function (job, timer) {
  return new Promise((resolve, reject) => {
    // 做非同步工作
    setTimeout(() => {
      let dt = new Date();
      let result = `完成工作: ${job} at ${dt.toISOString()}`;
      resolve(result);
    }, timer);
  });
};

//要用await 前 要用async 把函式包起來
//刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)
async function main() {

    try{
        //刷牙 (3000)
        let doBrush = await doWork("刷牙", 3000);
        console.log(doBrush);

        //吃早餐 (5000)
        let doEating = await doWork("吃早餐", 5000);
        console.log(doEating);

        //寫功課 (3000)
        let doWrite = await doWork("寫功課", 3000);
        console.log(doWrite);

    }catch(e){
        console.log("抓 錯誤");

    }

 
}

main()
