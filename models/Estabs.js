const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const EstabSchema = new Schema({
    name: String,
    location: String,
    description: String,
    price_min: Number,
    price_max: Number,
    original_poster: String,
    mobile_info: String,
    email_info: String,
    review_ids: [],
    pictures: []
}, {timestamps:true});

module.exports = Estab = mongoose.model('estab', EstabSchema);