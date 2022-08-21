var express = require("express");
var router = express.Router();
const loginCRUD = require("../models/login");
const bcrypt = require("bcryptjs");
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

router.post("/", (req, response) => {
  if (req.body) {
    console.log(req.body);
    loginCRUD.getPassWord(req.body.user, (dberr, dbres) => {
      const user = req.body.user;
      if (dberr) {
        response.send(false);
      } else {
        console.log(dbres);
        if (dbres[0]?.password) {
          bcrypt.compare(
            req.body.password,
            dbres[0].password,
            (err, result) => {
              if (result) {
                const token = generateAccessToken({ username: user });
                var resultJSON = {
                  userName: user,
                  userID: dbres[0].idusers,
                  token: token,
                };
                response.send(resultJSON);
              } else {
                response.send(false);
              }
            }
          );
        } else {
          response.send(false);
        }
      }
    });
  }
});

function generateAccessToken(username) {
  dotenv.config();
  return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: "7d" });
}

module.exports = router;
