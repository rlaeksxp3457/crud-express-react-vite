const keyboard = require("../models/keyboard");
const { where } = require("sequelize");

exports.getKeyBoards = (req, res) => {
  keyboard
    .findAll()
    .then((item) => {
      console.log(item);
      res.send(item);
    })
    .catch((err) => console.log(err));
};

exports.getKeyBoard = (req, res) => {
  const { keyboardId } = req.params;
  keyboard
    .findByPk(keyboardId)
    .then((item) => {
      res.send(item);
    })
    .catch((err) => console.log(err));
};

exports.postKeyBoard = (req, res) => {
  const { title, img, description } = req.body;
  keyboard
    .create({ title: title, img: img, description: description })
    .then((item) => {
      if (item) {
        return res.send("success");
      }
    })
    .catch((err) => console.log(err));
};

exports.putKeyBoard = (req, res) => {
  const { id, title, img, description } = req.body;
  keyboard
    .update(
      { title: title, img: img, description: description },
      { where: { id: id } }
    )
    .then(() => {
      return res.send("success");
    })
    .catch((err) => console.log(err));
};

exports.deleteKeyBoard = (req, res) => {
  const { id } = req.body;
  console.log(id);
  console.log("삭제");
  keyboard
    .destroy({ where: { id: id } })
    .then(() => {
      return res.send("success");
    })
    .catch((err) => console.log());
};
