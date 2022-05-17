//callback function 會變成 callback hell --> 用promise()解決

//起手: new Promise((resolve, reject) => {})

let time = new Date().toLocaleString();
console.log(`完成工作: 起床於 ${time}`);

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

//TODO: 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)

let doBrush = doWork("刷牙", 3000);
doBrush
  .then((result) => {
    //這裡接到[刷牙]成功的結果
    console.log(result);

    let doEat = doWork("吃早餐", 5000);
    return doEat;
  })
  .then((result) => {
    //這裡接到[吃早餐]成功的結果
    console.log(result);

    let doWrite = doWork("寫功課", 3000);
    return doWrite;
  })
  .then((result) => {
    console.log(result);
  })
  //只要發生錯誤都會到這裡
  .catch((error) => {
    console.log(`發生錯誤,來到catch`, error);
  })
  .finally(() => {
    console.log(`這裡是finally`);
  });
