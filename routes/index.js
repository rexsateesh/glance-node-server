const express = require('express');
const router = express.Router();
const { response } = require('../utils/helper');

router.get('/', function (req, res, next) {
  res.json(response('index'));
});

module.exports = router;
