const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors')
const history = require('connect-history-api-fallback');
const db = require('./db-config/db');

//DB Router
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const boardRouter = require('./routes/board');
const categoryRouter = require('./routes/category');
const adminRouter = require('./routes/admin');


const app = express();

app.use(cors());
db();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(history());
app.use(express.static(path.join(__dirname, 'public')));


// Router Setting
//root path
app.use('/api', indexRouter);
// /api/user path
app.use('/api/users', usersRouter);
// /api/board path
app.use('/api/board',boardRouter);
//  /api/category-manage path
app.use('/api/category',categoryRouter);
// /api/admin
app.use('/api/admin',adminRouter)



// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    next(err);
});

module.exports = app;
