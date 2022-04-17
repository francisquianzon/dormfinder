const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const users = require('./routes/users.js')
const estabs = require('./routes/estabs.js')
const app = express();

const cors = require("cors");
app.use(cors());

//BodyParser Middleware
app.use(bodyParser.json());

//DB Config
const db = require('./config/keys.js').mongoURI;
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));

//Connect to MongoDB Database using mongoose
mongoose.connect(db, {
    useNewUrlParser:true, useUnifiedTopology:true
}).then(() => app.listen(PORT, () =>
    console.log(`MongoDB Connected...`)
)).catch((err) => console.log(err.message));


//Use Routes
app.use('/users', users)
app.use('/establishments', estabs)