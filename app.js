var express = require('express');

// 引入自定义模块
var controller = require('./controller/controller');

var app = express();

app.set('view engine','ejs');

app.use(express.static('./public'));











controller(app);

app.listen(3000);