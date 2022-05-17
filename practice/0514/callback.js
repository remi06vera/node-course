//課程內容:利用 callback function 來寫非同步
// TODO: 刷牙 (3000) -> 吃早餐 (5000) -> 寫功課 (3000)

//第一步  確定有達到 3秒後 刷牙
// let time = new Date();  //建立 Date 物件  語法  new Date()
// console.log(`完成工作: 起床於 ${time}`);

// //setTimeout(code, 毫秒)
// setTimeout (()=>{
// let time = new Date();  //建立 Date 物件  語法  new Date()
// console.log(`完成工作: 刷牙 ${time}`);
// },3000);

//第二步  設立變數
let time = new Date().toLocaleString();  
console.log(`完成工作: 起床於 ${time}`);

let doWork = (job, delay, cb) => {
    setTimeout (()=>{
        let time = new Date().toLocaleString();
        let result = `完成工作: ${job} ${time}`;
        cb(result);
    },delay);
};

//doWork("刷牙", 3000, ()=>{})
doWork("刷牙", 3000, (doBrush)=>{
    console.log(doBrush);
    //這裡刷完牙
    doWork("吃早餐", 5000, (doEat)=>{
        console.log(doEat);
        //這裡吃完早餐
        doWork("寫功課", 3000, (doWrite)=>{
            console.log(doWrite);
        }); 
    }); 
}); 
