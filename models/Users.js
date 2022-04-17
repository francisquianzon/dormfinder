const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    username: {
        type: String,
        // required: true
    },
    user_email: {
        type: String,
        // required: true
    },
    user_password: {
        type: String,
        // required: true
    },
    
}, {timestamps:true});

module.exports = User = mongoose.model('user', UserSchema);