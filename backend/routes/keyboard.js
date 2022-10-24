const express = require("express");
const {
  getKeyBoards,
  postKeyBoard,
  putKeyBoard,
  deleteKeyBoard,
  getKeyBoard,
} = require("../controller/keyboard");
const router = express.Router();

/* GET 키보드 listing. */
router.get("/", getKeyBoards);

// /keyboard/:keyboardId GET keyboardId : 1, 2, 3, 4
router.get("/:keyboardId", getKeyBoard);

/* POST 키보드 create . */
router.post("/", postKeyBoard);

/* PUT 키보드 update. */
router.put("/", putKeyBoard);

/* DELETE 키보드 delete */
router.delete("/", deleteKeyBoard);

module.exports = router;
