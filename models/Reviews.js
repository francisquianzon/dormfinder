const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ReviewSchema = new Schema({
    username: String,
    dorm_id: String,
    review: String,
    score: Number,
    likes: []
    
}, {timestamps:true});

module.exports = Review = mongoose.model('review', ReviewSchema);