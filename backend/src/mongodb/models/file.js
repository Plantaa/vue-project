const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    fieldName: String,
    originalName: String,
    contents: Buffer
});

const fileModel = mongoose.model('File', fileSchema);

module.exports = fileModel;