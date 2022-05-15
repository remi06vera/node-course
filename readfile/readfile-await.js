//先要有一個 promise

const fs = require("fs");

function getReadfilePromise(filepath) {
  return new Promise((resolve, reject) => {
    fs.readFile(filepath, "utf-8", (err, data) => {
      if (err) {
        // 錯誤了
        reject(err);
      } else {
        // 因為沒有 err，所以是正確的
        resolve(data);
      }
    });
  });
}

//要用await 前 要用async 把函式包起來
async function main() {
  try {
    let getRead = await getReadfilePromise("test.txt");
    console.log(getRead);
  } catch (e) {
    console.log(e);

  }
}
main();

