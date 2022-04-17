const express = require('express');
const router = express.Router();

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
// @access  Public
router.post('/', (req,res) =>{
    const newEstab = new Estab({
        name: req.body.name,
        location: req.body.location,
        description: req.body.description,
        price: req.body.price
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


// @route   DELETE api/items/:id
// @desc    delete an item
// @access  Public
router.delete('/:id', (req,res) =>{
    Estab.findById(req.params.id)
    .then(estabs => estabs.remove().then(() => res.json({success: true})))
    .catch(err => res.status(404).json({success:false}))
})


module.exports = router;