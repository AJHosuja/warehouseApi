var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "sql11.freemysqlhosting.net",
  user: "sql11505843",
  password: "sFIbcsaTn6",
  database: "sql11505843",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("connected...!");
  }
});

setInterval(function () {
  connection.query("SELECT 1");
  console.log("query");
}, 5000);

module.exports = connection;
