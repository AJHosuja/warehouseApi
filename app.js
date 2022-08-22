var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const jwt = require("jsonwebtoken");

var addProductRouter = require("./routes/product");
var login = require("./routes/login");
var testToken = require("./routes/testToken");
var lastFive = require("./routes/lastFiveProducts");
var userMgn = require("./routes/users");

var app = express();
var cors = require("cors");
app.use(cors());

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/login", login);

app.use(authenticateToken);
app.use("/lastfive", lastFive);
app.use("/product", addProductRouter);
app.use("/usermgn", userMgn);
app.use("/token", testToken);

module.exports = app;

function authenticateToken(req, res, next) {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];

  console.log("token = " + token);
  if (token == null) return res.sendStatus(401);

  jwt.verify(token, process.env.MY_TOKEN, (err, user) => {
    console.log(err);

    if (err) return res.sendStatus(403);

    req.user = user;

    next();
  });
}
