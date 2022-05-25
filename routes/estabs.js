const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');

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

// @route   POST /image
// @desc    route for uploading an image
// @access  Public

var storage = multer.diskStorage({   
    destination: function(req, file, cb) { 
       cb(null, './client/public/uploads');    
    }, 
    filename: function (req, file, cb) { 
       cb(null , file.originalname);   
    }
 });

// var upload = multer({ storage: storage }).single("demo_image");
// const upload = multer({dest:'client/src/uploads/'});
const upload = multer({storage:storage});

// var upload = multer({ storage: storage }).array("demo_images", 4);
// var upload = multer({
//     storage: storage,
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// });

router.post("/image", upload.array("demo_images", 15), (req,res) => {
    // upload(req,res,(err) => {
    //     if(err){
    //         res.status(400).send("Something went wrong!");
    //     }
    //     res.send(req.file);
    // })
    try{
        res.send(req.files);
    }catch (error){
        console.log(error);
        res.send(400);
    }
})

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
        original_poster: req.body.original_poster,
        pictures: req.body.pictures
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