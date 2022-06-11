const express = require('express');
const router = express.Router();
const auth = require('../middleware/auth');
const multer = require('multer');
const { cloudinary } = require('../config/cloudinary');

//estabs Model 
const Estab = require('../models/Estabs.js');

// @route   GET /
// @desc    Get all establishments
// @access  Public
router.get('/', async (req,res) =>{
    const { page } = req.query;

    // Estab.find()
    // .sort({date: -1})
    // .then(estabs => res.json(estabs))

    try{
        const LIMIT = 8;
        const startIndex = (Number(page) - 1) * LIMIT;

        const total = await Estab.countDocuments({});
        const establishments = await Estab.find().sort({name:1}).limit(LIMIT).skip(startIndex);

        // res.json(establishments);
        res.json({ data: establishments, currentPage: Number(page), numberOfPages: Math.ceil(total / LIMIT)});
    }catch(error){
        res.status(404).json({message: error.message});
    }

});

// @route   GET /
// @desc    Get posts by search
// @access  Public
router.get('/search', async (req,res) => {
    const { searchQuery } = req.query;

    try{
        const establishments = await Estab.find({
            name: { $regex: searchQuery, $options: 'i' }
        });

        res.json({ data: establishments})
    }catch (error){
        res.status(404).json({message: error.message})
    }

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

const upload = multer({storage:storage});

// router.post("/image", upload.array("demo_images", 15), (req,res) => {
//     try{
//         res.send(req.files);
//     }catch (error){
//         console.log(error);
//         res.send(400);
//     }
// })

router.post("/image", async (req, res)=> {
    try{
        const fileStr = req.body.data;
        const uploadURL = [];
        // console.log(fileStr.length);
        for(let i=0;i<fileStr.length;i++){
            const uploadResponse = await cloudinary.uploader.upload(fileStr[i], {
                upload_preset: 'dev_folder',
            });
            uploadURL.push(uploadResponse.url);
        }
        // console.log("Images Uploaded");
        // console.log(uploadURL);
        res.send(uploadURL);
    }catch(err){
        console.error(err);
        res.status(500).json({ err: 'Something went wrong' });
    }
})

// @route   POST /
// @desc    create an establishment
// @access  Private
router.post('/', auth, async (req,res) =>{

    try{
        // console.log(req.body);
        const newEstab = new Estab({
            name: req.body.data.name,
            location: req.body.data.location,
            description: req.body.data.description,
            price_min: req.body.data.price_min,
            price_max: req.body.data.price_max,
            mobile_info: req.body.data.mobile_info,
            email_info: req.body.data.email_info,
            original_poster: req.body.data.original_poster,
            pictures: req.body.images,
            safety_guidelines: req.body.data.safety_guidelines,
            landlord_check: req.body.data.landlord_check,
            protocol_approved: req.body.data.protocol_approved
        });
        
    
        newEstab.save().then(estab => res.json(estab));
    }catch(err){
        console.log(err)
        res.status(500).json({ err: 'Something went wrong '});
    }

});

// @route   GET /:id
// @desc    find a specific establishment
// @access  Public
router.get('/:id', async (req,res) =>{
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