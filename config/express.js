const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const config = require('./environment');

module.exports = (app) => {
    const env = app.get('env');

    app.set('views', path.join(config.root, '/views'));
    app.engine('html', require('ejs').renderFile);
    app.set('view engine', 'html');

    app.use(bodyParser.urlencoded({ extended: true }));
    app.use(bodyParser.json());
    app.use(cookieParser());

    if ('development' === env) {
        app.use(express.static(path.join(config.root, 'public')));
        app.use(morgan('dev'));
    }
}


