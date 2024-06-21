const { model, Schema, } = require('mongoose');

const fileSchema = new Schema({
    fieldName: String,
    originalName: String,
    contents: Buffer
});
const fileModel = model('File', fileSchema);

module.exports = fileModel;