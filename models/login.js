const db = require('../database');

const users = {
    getPassWord: function (pass, callback) {
      return db.query('select * from users where username=?'
        , [pass], callback);
    }
  };
  
  module.exports = users;