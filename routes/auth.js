const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

//Item Model 
const User = require('../models/Users.js');

// @route   GET auth/user
// @desc    Get user data
// @access  Private
router.get('/user', auth, (req,res) =>{
    User.findById(req.user.id)
    .select('-password')
    .then(user => res.json(user));
});

// @route   POST api/items
// @desc    Auth user
// @access  Public
router.post('/', (req,res) =>{

    const {email, password} = req.body;

    //Simple validation; makes all fields required
    if(!email || !password){
        return res.status(400).json({
            msg:'Please enter all fields'
        });
    }

    //Checks for existing user
    User.findOne({email})
    .then(user => {
        if(!user) {
            return res.status(400).json({
                msg:'User does not exists'
            })
        }

        const newUser = new User({
            email,
            password
        });

        //Validate password
        bcrypt.compare(password, user.password)
        .then(isMatch => {
            if(!isMatch) return res.status(400).json({ msg:"Invalid Credentials"});

            jwt.sign(
                { id: user.id },
                config.get('jwtSecret'),
                { expiresIn: 36000 },
                (err, token) => {
                    if(err) throw err;

                    res.json({
                        token,
                        user:{
                            id: user.id,
                            username: user.username,
                            name: user.name,
                            email: user.email,
                            class: user.class
                        }
                    });
                }
            )
        })
        

    })


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