var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "+Wl-*oe;u7Mp",
  database: "wearly"
});

var stmt_multiple_insert = 'insert into `images` (`name`, `style`, `color`, `item`, `personal`) values ?;'; // 쿼리문
var values = [
    ['1.jpg', 'street', 'darkslategray', 'vest', 'spring'],
    ['2.jpg', 'street', 'darkslategray', 'vest', 'spring'],
    ['3.jpg', 'street', 'darkslategray', 'vest', 'spring'],
    ['4.jpg', 'street', 'darkslategray', 'vest', 'spring'],
    ['5.jpg', 'street', 'darkslategray', 'vest', 'spring']
];

// var data = [];
// for(var i=0; i<f.length; i++){
//     var list =[];
//     list.push(f.name);
//     list.push(f.style);
//     list.push(f.color);
//     list.push(f.item);
//     list.push(f.personal);
//     console.log(list);
//     data.push(list);
// }
// console.log(data);

var str_query = con.query(stmt_multiple_insert, [values], function (err, result) {
    if (err) {
        console.log(err);
    } else {
        console.log(str_query.sql);
    }
});