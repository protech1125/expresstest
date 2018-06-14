'use strict';

module.exports = (app) => {
    app.use('/api/v1/files', require('./api/v1/files'));

    app.route('/:url(api|app|assets)/*')
        .get((req, res) => {
            res.render('error');
        })

    app.route('/*')
        .get((req, res) => {
            res.render('index');
        })
}