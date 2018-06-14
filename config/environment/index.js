const path = require('path');
const _ = require('lodash');

const all = {
    env: process.env.NODE_ENV || 'development',

    root: path.normalize(__dirname + '/../..'),
    port: process.env.PORT || 3000,

    docPath: process.env.DOCPATH || '/Volumes/Doc'
}

module.exports = _.merge(
    all,
    require('./' + (process.env.NODE_ENV || 'development') + '.js') || {}
);