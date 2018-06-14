
const express = require('express');
const app = express();
const mongoose = require('./config/mongoose');

require('./models').loadModels();
require('./config/express')(app);
require('./routes')(app);

mongoose.connect();
process.on('SIGINT', () => {
  mongoose.disconnect((err) => {
    if (err) {
      console.log(err);
    }

    process.exit(0);
  });
});

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
