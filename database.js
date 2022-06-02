var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'remotemysql.com',
    user: '6S5GIfvfoo',
    password: 'trK1DsBp8f',
    database: '6S5GIfvfoo'
});

connection.connect(function(error){
    if(!!error){
        console.log(error);
    } else{
        console.log('connected...!');

    }
});

setInterval(function () {
    connection.query('SELECT 1');
    console.log('query')
}, 5000);

module.exports = connection;