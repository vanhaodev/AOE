const express = require('express');
const path = require('path');
const app = express();
const handlebars = require('express-handlebars');
var util= require('util');
var encoder = new util.TextEncoder('utf-8');

const api = express.Router();
const route = require('./routes');
const db = require('./config/db/dbConnect');
db.connect();
//Khởi tạo public folder
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json())
app.use(express.urlencoded({extended: true}));

const bcrypt = require ('bcrypt'); //mã hóa pass
const saltRounds = 10; //càng cao, mã hóa càng chắc, nhưng sẽ chậm dần

//Khởi tạo template hbs
//-------------Khởi tạo view engine Handlebars
var hbs = handlebars.create({
  extname: '.hbs', //đổi đuôi file mặc định thành .hbs (gốc là .handlebars)
  helpers: require('./helpers/handlebars'), //lấy module tự chế bên helper

});
app.engine('hbs', hbs.engine); //sử dụng engine hbs
app.set('view engine', 'hbs'); //set Engnine là Handlebars

app.set('views', path.join(__dirname, 'resources', 'views'))
//----------------------------------------

//----------------------------------------

route(app);

//Nghe 
app.listen(2001, () => {
    console.log(`App listening at http://localhost:2001`);
  });