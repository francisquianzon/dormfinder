const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const config = require('config');
const jwt = require('jsonwebtoken');
const auth = require('../middleware/auth');

//Item Model 
const User = require('../models/Users.js');

// @route   GET api/items
// @desc    Get all users
// @access  Private
router.get('/', auth, (req,res) =>{
    User.find()
    .sort({date: -1})
    .then(users => res.json(users))
    // res.send('register')
});

// @route   POST api/items
// @desc    registers a user
// @access  Public
router.post('/', (req,res) =>{

    const {name, username, email, password} = req.body;

    //Simple validation; makes all fields required
    if(!name || !email || !username || !password){
        return res.status(400).json({
            msg:'Please enter all fields'
        });
    }

    //Checks for existing user
    User.findOne({email})
    .then(user => {
        if(user) {
            return res.status(400).json({
                msg:'User already exists huhu'
            })
        }

        const newUser = new User({
            name,
            username,
            email,
            password
        });

        //Create salt and hash (hashes the password string)
        bcrypt.genSalt(10, (err,salt) => {
            bcrypt.hash(newUser.password, salt, (err,hash)=>{
                // if(err) throw err;
                newUser.password = hash;
                //resgisters the user to the database
                newUser.save()
                .then(user => {
                    //creates a web token
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
                                    name: user.name,
                                    email: user.email
                                }
                            });
                        }
                    )

                });

            });
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