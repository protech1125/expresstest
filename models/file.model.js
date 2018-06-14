'use strict';

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const FileSchema = new Schema({
    name: {
        type: String,
        required: true
    },

    originalName: {
        type: String,
        required: true
    },

    path: {
        type: String,
        required: true
    },

    expiryDays: {
        type: Number,
    },

    expiryAt: {
        type: Date,
    },

    uploadedAt: {
        type: Date,
        default: Date.now
    },
});

mongoose.model('File', FileSchema);

