var express = require('express');
const { response } = require('../app');
var router = express.Router();

router.get('/', (req, response) => {
     response.send(true);
})

module.exports = router;