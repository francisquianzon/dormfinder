const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth')

//estabs Model 
const User = require('../models/Estabs.js');

// @route   GET /
// @desc    Get all establishments
// @access  Public
router.get('/', (req,res) =>{
    Estab.find()
    .sort({date: -1})
    .then(estabs => res.json(estabs))
});

// @route   POST /
// @desc    create an establishment
// @access  Private
router.post('/', auth, (req,res) =>{
    const newEstab = new Estab({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        price_min: req.body.price_min,
        price_max: req.body.price_max,
        mobile_info: req.body.mobile_info,
        email_info: req.body.email_info,
        original_poster: req.body.original_poster
    });

    newEstab.save().then(estab => res.json(estab));

});

// @route   GET /:id
// @desc    find a specific establishment
// @access  Public
router.get('/:id', (req,res) =>{
    Estab.findById(req.params.id)
    .then(estabs => res.json(estabs))
});

//@route    POST /r/:id
//@desc     add a review to an establishment
//@access   Public
router.put('/r/:id', (req,res)=>{
    var conditions = {_id: req.params.id};

    Estab.findOneAndUpdate(
        { _id: req.params.id},
        { $push: {
            review_ids: req.body.review_ids
        }},
    )
    .then(estab => res.json(estab));
});


//@route    PUT /:id 
//@dec      find and update an establishment
//@access   Private
router.put('/:id', (req,res)=>{
    var conditions = {_id: req.params.id};

    Estab.update(conditions, req.body)
    .then(doc =>{
        if(!doc) { return res.status(404).end();}
        return res.status(200).json(doc);
    })
    .catch(err=>next(err))
})

// @route   DELETE api/items/:id
// @desc    delete an item
// @access  Private
router.delete('/:id', auth, (req,res) =>{
    Estab.findById(req.params.id)
    .then(estabs => estabs.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success:false}))
})


module.exports = router;