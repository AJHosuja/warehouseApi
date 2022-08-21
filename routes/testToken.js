var express = require("express");
const { response } = require("../app");
var router = express.Router();
const dotenv = require("dotenv");
const jwt = require("jsonwebtoken");

router.get("/:user", (req, response) => {
  const userName = req.params.user;
  const token = generateAccessToken({ username: userName });
  var resultJSON = {
    success: true,
    token: token,
    user: userName,
  };

  response.send(resultJSON);
});

function generateAccessToken(username) {
  dotenv.config();
  return jwt.sign(username, process.env.MY_TOKEN, { expiresIn: "7d" });
}

module.exports = router;
