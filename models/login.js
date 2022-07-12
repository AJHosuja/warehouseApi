const db = require("../database");

const users = {
  getPassWord: function (pass, callback) {
    console.log(pass);
    return db.query("select * from users where username=?", [pass], callback);
  },
};

module.exports = users;
