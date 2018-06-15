'use strict';

module.exports = {
    // Server IP
    ip:     process.env.OPENSHIFT_NODEJS_IP ||
            process.env.IP ||
            undefined,
    
    // Server PORT
    port:   process.env.OPENSHIFT_NODEJS_PORT ||
            process.env.PORT ||
            8080,

    mongo: {
        uri: process.env.MONGO_URI,
        username: process.env.MONGO_USERNAME,
        password: process.env.MONGO_PASSWORD,
        debug: false,
        options: {
            reconnectTries: Number.MAX_VALUE,
            reconnectInterval: 500,
            poolSize: 10
        }
    }
}