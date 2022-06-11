require('dotenv').config();
const cloudinary = require('cloudinary').v2;
cloudinary.config({
    cloud_name: 'francisquianzoncloud',
    api_key: '699183964598843',
    api_secret: 'gkKPm99kFeQHshg6ekLjFFrmfyE',
});

module.exports = { cloudinary };
