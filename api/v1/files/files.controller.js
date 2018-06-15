'use strict';

const multer = require('multer'),
    fs = require('fs'),
    path = require('path'),
    moment = require('moment'),
    mongoose = require('mongoose'),
    FileModel = mongoose.model('File'),
    ObjectId = require('mongoose').Types.ObjectId,
    
    config = require('../../../config/environment'),
    { handle404, handleError } = require('../response.helper');

exports.index = (req, res) => {
    FileModel.find({}, (err, files) => {
        if (err) {
            return handleError(res, err)
        }
        
        return res.status(200).json(files);
    })
}

exports.search = (req, res) => {
    let id = null;
    try {
        id = ObjectId(req.params.id);
    } catch (e) {
        return handle404(res);
    }

    FileModel.findOne({_id: id})
        .exec((err, file) => {
            if (err) {
                return handleError(res, err);
            }

            if (file) {
                res.status(200).json(file);
            } else {
                return handle404(res);
            }
        });
}

exports.upload = (req, res) => {
    const pathConfig = config.filePath;
    let fullPath = null,
        fileName = null,
        originalName = null,
        expiryDays = config.fileExpiryDays;

    if (req.params.expiryDays) {
        expiryDays = req.params.expiryDays;
    }

    const storage = multer.diskStorage({
        destination: pathConfig,
        filename: function (req, file, cb) {
            const split = (!config.isWindow) ? '/' : '\\';
            fullPath = pathConfig + split + file.originalname;

            originalName = file.originalname;
            fileName = originalName;
            if (fs.existsSync(fullPath)) {
                const fileObj = path.parse(file.originalname);
                const uniqueId = '_' + moment().format('YYYYMMDDHHmmss');
                fileName = fileObj.name + uniqueId + fileObj.ext;
                fullPath = pathConfig + split + fileName;
            }
            cb(null, fileName)
        }
    });

    const upload = multer({ storage }).any();
    upload(req, res, (err) => {
        if (err) {
            return handleError(res, err);
        }

        const file = {
            name: fileName,
            originalName: originalName,
            path: fullPath,
            expiryDays: expiryDays,
            expiryAt: moment().add(expiryDays, 'day')
        };

        const fileModel = new FileModel(file);
        fileModel.save((err) => {
            if (err) {
                return handleError(res, err);
            }

            res.status(200).json(file);
        });
    });
}

