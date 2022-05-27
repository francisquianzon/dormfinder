const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

//estabs Model 
const Review = require('../models/Reviews.js');

//@route    GET /
//@desc     Get all reviews for an establishment
//@access   Public
router.get('/:dorm_id', async (req, res) => {
    Review.find({dorm_id:req.params.dorm_id})
    .sort({date:-1})
    .then(reviews => res.json(reviews))
});

// @route   POST /
// @desc    post a review
// @access  Private
router.post('/', auth, async (req,res) =>{

    const newReview = new Review({
        username: req.body.username,
        dorm_id: req.body.dorm_id,
        review: req.body.review,
        score: req.body.score
    });

    newReview.likes.push(req.body.likes);
    newReview.save().then(review => res.json(review));

});

//@route    POST /:id
//@desc     add a like to the review
//@access   Private
router.post('/:id', auth, async (req,res) =>{
    var conditions = {_id: req.params.id};

    Review.findOneAndUpdate(
        { _id: req.params.id},
        { $push: {
            likes: req.body.likes
        }},
    )
    .then(review => res.json(review));
});

module.exports = router;