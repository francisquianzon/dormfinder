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
    landlord_check: Boolean,
    review_ids: [],
    pictures: [],
    approved: Boolean,
    protocol_approved: Boolean,
    safety_guidelines: {
        guideline_1: Boolean,
        guideline_2: Boolean,
        guideline_3: Boolean,
        guideline_4: Boolean,
        guideline_5: Boolean
    }
}, {timestamps:true});

module.exports = Estab = mongoose.model('estab', EstabSchema);