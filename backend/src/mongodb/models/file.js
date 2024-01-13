const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const fileSchema = new Schema({
    fieldName: String,
    originalName: String,
    contents: String
});

const fileModel = mongoose.model('File', fileSchema);

module.exports = fileModel;