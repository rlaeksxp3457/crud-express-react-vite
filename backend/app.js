const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')

require("dotenv").config();

const indexRouter = require('./routes/index');
const keyboardRouter = require('./routes/keyboard');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

const {EXPRESS_SERVER_CORS_PORT} = process.env

app.use(
	cors({
		origin: "http://127.0.0.1:" + EXPRESS_SERVER_CORS_PORT,
		credentials: true,
	})
);

app.use('/keyboard', keyboardRouter);

app.use('/', indexRouter);

app.listen('3000')

module.exports = app;
