'use strict';

module.exports = (app) => {
    app.use('/api/v1/files', require('./api/v1/files'));

    app.route('/')
        .get((req, res) => {
            res.render('index', { title: 'Express' });
        })
}