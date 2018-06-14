'use strict';

module.exports = (app) => {
    app.use('/api/v1/file', require('./api/v1/file'));

    app.route('/*')
        .get((req, res) => {
            res.render('index', { title: 'Express' });
        })
}