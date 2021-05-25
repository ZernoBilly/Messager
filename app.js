const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();

//Import routes
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);


//Routes
app.get('/', (req,res) => {
    res.send('We are at home');
});


//Db connection
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to DB!"));

//Server listen port
app.listen(3000);