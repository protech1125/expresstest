'use strict';

exports.handleError = (res, err) => {
    return res.status(500).json({
        message: err.message
    })
}

exports.handle404 = (res, message = 'Not found') => {
    return res.status(404).json({ message });
}