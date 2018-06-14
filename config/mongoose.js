'use strict';

const mongoose = require('mongoose');
const chalk = require('chalk');
const config = require('./environment');

// DB connection
module.exports.connect = (callback) => {
    mongoose.connect(config.mongo.uri, config.mongo.options, (err) => {
        if (err) {
            console.error(chalk.red('Could not connect to MongoDB!'));
            console.log(err);
        } else {
            console.info(chalk.yellow('Connected to MongoDB successfully.'));
            mongoose.set('debug', config.mongo.debug);
            if (callback) callback();
        }
    });    
}

module.exports.disconnect = (callback) => {
    mongoose.disconnect((err) => {
        console.info(chalk.yellow('Disconnected from MongoDB.'));
        callback(err);
    })
}