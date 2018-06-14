'use strict';

const express = require('express');
const router = express.Router();
const controller = require('./files.controller');

router.get('/', controller.index);
router.get('/:id', controller.search);
router.post('/upload', controller.upload);

module.exports = router;
