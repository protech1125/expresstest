'use strict';

module.exports = {
    mongo: {
        uri: process.env.MONGO_URI || 'mongodb://localhost:27017/filedb',
        username: 'root',
        password: '',
        debug: true,
        options: {
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10
        }
    }
}