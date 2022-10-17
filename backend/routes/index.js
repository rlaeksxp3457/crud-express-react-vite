const express = require('express');
const router = express.Router();
const path = require('path')
const appPath = require('../util/path')

/* GET home page. */
router.get('/', (req, res, next) => {
  res.sendFile(path.join(appPath, 'public/index.html'))
});
/* GET home page. */
router.get('*', (req, res, next) => {
  res.sendFile(path.join(appPath, 'public/index.html'))
});


module.exports = router;
