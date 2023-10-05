require('dotenv').config();
require('./config/database');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var appRouter = require('./routes/app');
var webRouter = require('./routes/web');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/app/api', appRouter);
app.use('/web/api', webRouter);

module.exports = app;
