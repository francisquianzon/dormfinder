const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

//estabs Model 
const Review = require('../models/Reviews.js');

//@route    GET /
//@desc     Get all reviews for an establishment
//@access   Public
router.get('/:dorm_id', (req, res) => {
    Review.find({dorm_id:req.params.dorm_id})
    .then(reviews => res.json(reviews))
});

// @route   POST /
// @desc    post a review
// @access  Private
router.post('/', auth, (req,res) =>{

    const newReview = new Review({
        user_id: req.body.user_id,
        dorm_id: req.body.dorm_id,
        review: req.body.review,
        score: req.body.score 
    });

    newReview.save().then(review => res.json(review));

});

module.exports = router;