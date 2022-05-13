require('dotenv').config({ path: '../.env' })

const express = require('express');
const app = express();
const path = require('path');
const static = require('serve-static');

let url = require('url');
let qs = require('querystring');
let mysql = require('mysql');

let con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME
});
con.connect();

app.use(static(path.join(__dirname, '../public')));
var template = require('./template.js')

let recommend={
	item:{
		street:'trousers',
		vintage:'skirt',
		casual:'trousers',
		feminine:'trousers',
		modern:'trousers',
		minimal:'trousers'
	},
	final_color:{
		street:'black',
		vintage:'green',
		casual:'black',
		feminine:'gray',
		modern:'black',
		minimal:'black'
	}
};


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
  var colors=[];
  var style=req.query.category;
  var personal=req.query.personal_color;
  var final_color = recommend.final_color[style];
  var item= recommend.item[style];

  con.query(`SELECT * FROM images WHERE style="${style}" AND personal="${personal}" AND final_color="${final_color}" AND item="${item}"`, function (err, data, fields) {
      if (err) throw err;
      if(data.length > 3){
        for(var i=0; i<3; i++){
            var index = Math.floor(Math.random() * data.length);

            names.push(data[index].name);
	    colors.push(data[index].color);
            data.splice(index,1);
          }
      }else{
        for(var i=0; i<data.length; i++){
          names.push(data[i].name);
	  colors.push(data[i].color);
        }
      }
	console.log(names);
	  console.log(colors);
      var result = template.result(style, names, item, final_color, colors);
      res.send(result);
  });
});

app.listen(3000, () => {
  console.log('3000번 포트 사용중');
});
