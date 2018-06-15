'use strict';

const path = require('path');
const _ = require('lodash');

const all = {
    env: process.env.NODE_ENV || 'development',

    root: path.normalize(__dirname + '/../..'),
    port: process.env.PORT || 3000,

    filePath: process.env.FilePath || '/Volumes/Work/Volumes',
    fileExpiryDays: 1,
    intervalDelay: 1000 * 60 * 60,
    
    isWindow: /^win/.test(process.platform)
}

module.exports = _.merge(
    all,
    require('./' + (process.env.NODE_ENV || 'development') + '.js') || {}
);