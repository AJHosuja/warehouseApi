const db = require("../database");
const bcrypt = require("bcryptjs");

const usersManagement = {
  getAllUsers: function (callback) {
    return db.query("SELECT * FROM users", callback);
  },
  deleteUserById: function (id, callback) {
    return db.query("delete from users where idusers=?", [id], callback);
  },
  addUser: function (userName, password, callback) {
    return db.query(
      "INSERT INTO users (username, password) VALUES (?,?);",
      [userName, password],
      callback
    );
  },
  resetPass: function (id, password, callback) {
    return db.query(
      "UPDATE users SET password = ? WHERE (idusers = ?)",
      [password, id],
      callback
    );
  },
  changePassByUserName: function (username, password, callback) {
    return db.query(
      "UPDATE users SET password = ? WHERE (username = ?)",
      [password, username],
      callback
    );
  },
};

module.exports = usersManagement;
