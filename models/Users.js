const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const UserSchema = new Schema({
    name: {
        type: String,
        // required: true
    },
    username: {
        type: String,
        // required: true
    },
    email: {
        type: String,
        required: true,
        // unique: true
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