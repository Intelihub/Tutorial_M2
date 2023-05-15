var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const sqlite3 = require('sqlite3').verbose();
let db = new sqlite3.Database('./database.db');

var indexRouter = require('./routes/index');
var abilitiesRouter = require('./routes/abilities');
var curriculaRouter = require('./routes/curricula');
var experiencesRouter = require('./routes/experiences');
var formationsRouter = require('./routes/formations');
var personalitiesRouter = require('./routes/personalities');
var realizationsRouter = require('./routes/realizations');

var app = express();

// Connect to DB
app.use(function (req, res, next) {
    req.db = db;
    next();
});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/abilities', abilitiesRouter);
app.use('/curricula', curriculaRouter);
app.use('/experiences', experiencesRouter);
app.use('/formations', formationsRouter);
app.use('/personalities', personalitiesRouter);
app.use('/realizations', realizationsRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.json({error: err.message})
});

module.exports = app;
