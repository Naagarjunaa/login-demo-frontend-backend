global.mongoose = require('mongoose');
global.Schema = mongoose.Schema;

const userSchema = new Schema({
    username: String,
    password: String
});

module.exports = mongoose.model('user', userSchema, 'users');