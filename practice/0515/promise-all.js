//callback function 會變成 callback hell --> 用promise()解決

//起手: new Promise((resolve, reject) => {})

let time = new Date().toLocaleString();
console.log(`完成工作: 起床於 ${time}`);

let doWork = (job) => {
  let time = Math.floor(Math.random() * 5000); //設立隨機時間
  return new Promise((resolve, reject) => {
    //做非同步工作
    setTimeout(() => {
      let time = new Date().toLocaleString();
      let result = `完成工作: ${job} ${time}`;
      //成功
      resolve(result);
      //reject("故意失敗");
    }, time);
  });
};

//TODO: 三件事同時做
// 刷牙 (3000)
// 吃早餐 (5000)
// 寫功課 (3000)
// 三件事情都做完--->吃午餐

let doBrush = doWork("刷牙");
let doEat = doWork("吃早餐");
let doWrite = doWork("寫功課");
//Promise.all-->三個會一起做完
// Promise.all([doBrush, doEat, doWrite]).then((values) => {
//   console.log(values);
// });

//寫成async await

(async () => {
  let result =await Promise.all([doBrush, doEat, doWrite]);
  console.log(result);//沒加await會顯示 Promise { <pending> }
})();
