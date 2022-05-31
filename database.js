var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'eu-cdbr-west-02.cleardb.net',
    user: 'b70af378e401f3',
    password: '8057edbe',
    database: 'heroku_f2ac814f8ea867b'
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