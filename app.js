
const express = require('express');
const app = express();
const mongoose = require('mongoose');

const config = require('./config/environment');

// DB connection
mongoose.connect(config.mongo.uri, config.mongo.options);

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose connection terminated');
    process.exit(0);
  })
})

require('./config/express')(app);
require('./routes')(app);

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
