'use strict';

const express = require('express');
const app = express();
const mongoose = require('./config/mongoose');

require('./models').loadModels();
require('./config/express')(app);
require('./routes')(app);
require('./services/file.service')();

mongoose.connect();
process.on('SIGINT', () => {
  mongoose.disconnect((err) => {
    if (err) {
      console.log(err);
    }

    process.exit(0);
  });
});

module.exports = app;
