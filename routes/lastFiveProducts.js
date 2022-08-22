var express = require("express");
var router = express.Router();
const productCRUD = require("../models/product");
//const dotenv = require('dotenv');

router.get("/", (req, response) => {
  productCRUD.getLastFiveUpdates((dberr, dbRes) => {
    if (dberr) {
      response.send(dberr);
    } else {
      response.send(dbRes);
    }
  });
});

module.exports = router;
