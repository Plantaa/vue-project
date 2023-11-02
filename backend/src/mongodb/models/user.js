const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    uuid: String,
    name: String
});

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;