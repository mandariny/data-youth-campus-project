const express = require('express');
const app = express();
const path = require('path');
const static = require('serve-static');
let url = require('url');
let qs = require('querystring');
let mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "+Wl-*oe;u7Mp",
  database: "wearly"
});
con.connect();

app.use(static(path.join(__dirname, '../public')));
var template = require('./template2.js')

app.get('/', (req, res, next) => {
  var _url = req.url;
  var queryData = url.parse(_url, true).query;
  //pathname = url.parse(_url, true).pathname;
  if(queryData.id === undefined){
    var home = template.home();
    res.send(home);
  }else if(queryData.id === 'test'){
      var test = template.test();
      res.send(test);
  }else{
    res.status(404).send("404 NOT FOUND...");
  }
});

app.get('/result', (req, res) => {
  var names=[];
  var style=req.query.category;
  var personal=req.query.personal_color;
  var color = "darkslategray";
  var item="vest";

  con.query(`SELECT * FROM images WHERE style="${style}" AND color="${color}" AND item="${item}" AND personal="${personal}"`, function (err, data, fields) {
      if (err) throw err;
      if(data.length > 3){
        for(var i=0; i<3; i++){
            var index = Math.floor(Math.random() * data.length);

            names.push(data[index].name);
            data.splice(index,1);
          }
      }else{
        for(var i=0; i<data.length; i++){
          names.push(data[i].name);
        }
      }
      var result = template.result(style, names, item, color);
      res.send(result);
  });
});

app.listen(8005, () => {
  console.log('8005번 포트 사용중');
});