const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const sequelize = require("./util/db");

require("dotenv").config();

const indexRouter = require("./routes/index");
const keyboardRouter = require("./routes/keyboard");

const app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/keyboard", keyboardRouter);

app.use("/", indexRouter);

sequelize
  .sync({ alter: true })
  .then(() => {
    app.listen(3000);
    console.log();
  })
  .catch((err) => {
    console.error(err);
  });

module.exports = app;
