const keyboard = require("../models/keyboard");

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
  const { keyboardId } = req.body;
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

exports.putKeyBoard = () => {
  return [];
};

exports.deleteKeyBoard = () => {
  return [];
};
