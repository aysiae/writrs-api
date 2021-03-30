'use strict';

const mongoose = require('mongoose');

const oneLinerSchema = mongoose.Schema({
    prompt: {type: String, required: true}
})

const oneLinerModel = mongoose.model('one-liners', oneLinerSchema);

module.exports = oneLinerModel;