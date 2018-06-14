'use strict';

const fs = require('fs');
const path = require('path');

module.exports.loadModels = (callback) => {
    fs.readdirSync(__dirname)
        .filter((file) => {
            return (file.indexOf(".") !== 0 && (file !== "index.js"))
        })
        .forEach((file) => {
            require(path.join(__dirname, file));
        });
    if (callback) callback();
}

