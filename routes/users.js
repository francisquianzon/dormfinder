const express = require('express');
const router = express.Router();

//Item Model 
const User = require('../models/Users.js');

// @route   GET api/items
// @desc    Get all items
// @access  Public
router.get('/', (req,res) =>{
    User.find()
    .sort({date: -1})
    .then(users => res.json(users))
});

// @route   POST api/items
// @desc    create an item
// @access  Public
router.post('/', (req,res) =>{
    const newUser = new User({
        name: req.body.name,
        username: req.body.username,
        user_email: req.body.user_email,
        user_password: req.body.user_password
    });

    newUser.save().then(user => res.json(user));

});

// @route   DELETE api/items/:id
// @desc    delete an item
// @access  Public
// router.delete('/:id', (req,res) =>{
//     Item.findById(req.params.id)
//     .then(item => item.remove().then(() => res.json({success: true})))
//     .catch(err => res.status(404).json({success:false}))
// })


module.exports = router;