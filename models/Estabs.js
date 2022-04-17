const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const EstabSchema = new Schema({
    name: String,
    location: String,
    description: String,
    price: Number,
}, {timestamps:true});

module.exports = Estab = mongoose.model('estab', EstabSchema);