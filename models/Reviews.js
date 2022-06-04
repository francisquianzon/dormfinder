const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Create Schema
const ReviewSchema = new Schema({
    username: String,
    dorm_id: String,
    review: String,
    score: Number,
    score_cleanliness: Number,
    score_price_value: Number,
    score_location: Number,
    score_amenaties: Number,
    score_security: Number,
    likes: []
    
}, {timestamps:true});

module.exports = Review = mongoose.model('review', ReviewSchema);