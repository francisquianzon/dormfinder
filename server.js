const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('config');
const path = require('path');

const users = require('./routes/users.js')
const estabs = require('./routes/estabs.js')
const auth = require('./routes/auth.js')
const app = express();

const cors = require("cors");
app.use(cors());

//BodyParser Middleware
app.use(express.json());

//DB Config
// const db = require('./config/keys.js').mongoURI;
const db = config.get('mongoURI');
const PORT = process.env.PORT;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Connect to MongoDB Database using mongoose
mongoose.connect(db, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log(`MongoDB Connected...`)
)).catch((err) => console.log(err.message));

//Serve static assets in production
if(process.env.NODE_ENV === 'production'){
    //set a static folder
    app.use(express.static('client/build'));
    app.get('*', (req,res) => {
        res.sendFile(path.resolve(_dirname, 'client', 'build', 'index'));
    });
}

//Use Routes
app.use('/users', users)
app.use('/auth', auth)
app.use('/establishments', estabs)
