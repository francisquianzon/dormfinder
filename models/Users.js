const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
    },
    username: {
        type: String,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },

    class: {
        type: String,
        default: "user"
    }
    
}, {timestamps:true});

module.exports = User = mongoose.model('user', UserSchema);