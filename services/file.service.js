'use strict';

const fs = require('fs'),
    chalk = require('chalk'),
    mongoose = require('mongoose'),
    FileModel = mongoose.model('File'),
    
    config = require('../config/environment');

const findAndRemove = () => {
    FileModel.find({expiryAt: { $lte: new Date() }})
        .exec((err, res) => {
            if (err) {
                console.error(chalk.red('Unexpected error happened during searching files.'));
                console.log(err);
            } else {
                res.map((file) => {
                    let path = file.path;
    
                    if (fs.existsSync(path)) {
                        fs.unlinkSync(path);
                    }

                    file.remove((err) => {
                        if (err) {
                            console.error(chalk.red('Unexpected error happened during deleting file.'));
                            console.log(err);
                        } else {
                            console.info(chalk.yellow('file: "' + path + '" was deleted successfully.'));
                        }
                    });
                });
            }
        });
}

module.exports = () => {
    setInterval(() => {
        findAndRemove();
    }, config.intervalDelay);
}
