const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ReviewSchema = new Schema({
    user_id: String,
    review: String,
    score: Number,
    
}, {timestamps:true});

module.exports = Review = mongoose.model('review', ReviewSchema);