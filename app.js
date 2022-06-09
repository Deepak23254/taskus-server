var createError = require('http-errors');
var express = require('express');
var cors = require('cors');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose');

var indexRouter = require('./api/v1/controller/index');
var usersRouter = require('./api/v1/controller/users');
var widgetRouter = require('./api/v1/controller/widget');
var chatRouter = require('./api/v1/controller/chat');
var uploadRouter = require('./api/v1/controller/fileupload');
var scriptRouter = require('./api/v1/controller/returnscript');

const mongoString = require('./config/db.config');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


mongoose.connect(mongoString.url);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/widget', widgetRouter);
app.use('/chat', chatRouter);
app.use('/fileupload', uploadRouter);
app.use('/tag/js', scriptRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
