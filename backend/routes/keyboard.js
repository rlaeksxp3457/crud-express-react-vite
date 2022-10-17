const express = require('express');
const {getKeyBoard, postKeyBoard, putKeyBoard, deleteKeyBoard} = require("../controller/keyboard");
const router = express.Router();

/* GET 키보드 listing. */
router.get('/get', getKeyBoard);

/* POST 키보드 create . */
router.post('/', postKeyBoard);

/* PUT 키보드 update. */
router.put('/', putKeyBoard);

/* DELETE 키보드 delete */
router.delete('/', deleteKeyBoard);

module.exports = router;
