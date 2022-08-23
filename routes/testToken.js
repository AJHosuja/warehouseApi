var express = require("express");
const { response } = require("../app");
var router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");
const loginCRUD = require("../models/login");

router.get("/:user", (req, response) => {
  const userName = req.params.user;
  console.log(userName);

  loginCRUD.getPassWord(userName, (dberr, dbres) => {
    if (dberr) {
      response.send(false);
    } else {
      if (dbres[0]?.username) {
        let admin = false;
        if (dbres[0]?.admin) {
          console.log("here");
          admin = true;
        }
        const token = generateAccessToken({ username: userName });
        var resultJSON = {
          success: true,
          token: token,
          user: userName,
          admin: admin,
        };
        response.send(resultJSON);
      } else {
        response.send(false);
      }
    }
  });
});

function generateAccessToken(username) {
  dotenv.config();
  return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: "7d" });
}

module.exports = router;
