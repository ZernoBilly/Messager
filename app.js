const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const app = express();

//Routes
app.get('/', (req,res) => {
    res.send('We are at home');
});

app.get('/posts', (req,res) => {
    res.send('We are at posts');
});


//Db connection
mongoose.connect('mongodb+srv://heikki:INIzQdvJqmCVt1T2@cluster0.x6fc9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true }, () => console.log("Connected to DB!"));

//Server listen port
app.listen(3000);