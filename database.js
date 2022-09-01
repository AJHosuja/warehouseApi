var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "164.92.196.198",
  user: "nodejs",
  password: "NodeJs%6363%JS",
  database: "sql11505843",
});

connection.connect(function (error) {
  if (!!error) {
    console.log(error);
  } else {
    console.log("connected...!");
  }
});

module.exports = connection;
