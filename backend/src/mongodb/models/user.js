const { model, Schema } = require('mongoose');

const userSchema = new Schema({
    uuid: String,
    name: String
});
const userModel = model('User', userSchema);

module.exports = userModel;