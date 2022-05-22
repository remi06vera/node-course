//步驟1：導入第三方套件-express 
const express = require('express');
//步驟2：利用Express 建立一個 express applications
const app = express();

//HTTP reguest(client--->請求--->server)
//method:get,post,put,delete..
app.get('/', (request, response, next) => {
    response.send("Home");
});

app.get('/about', (request, response, next) => {
    response.send("About me");
})

//步驟3：告訴伺服器聽取 3001 這個 Port
app.listen(3001, () => {
    console.log('Server running at port 3001');
})