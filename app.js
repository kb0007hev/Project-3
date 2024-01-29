const express = require('express');
const mongoose = require('mongoose');
const authRoutes = require('./routes/authRoutes');
const cookieParser = require('cookie-parser');

const app = express();

// middleware
app.use(express.static('public'));
app.use(express.json());
app.use(cookieParser());

// view engine
app.set('view engine', 'ejs');

// database connection
const dbURI = 'mongodb+srv://kevin:test789@cluster0.sk6mdok.mongodb.net/node-auth?retryWrites=true&w=majority';

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

// routes
app.get('/', (req, res) => res.render('home'));
app.get('/events', (req, res) => res.render('events'));
app.use(authRoutes);


// cookies
app.get('/set-cookies', (req, res) => {
    // Set 'newUser' cookie with the value 'false'
    res.cookie('newUser', false);
    // Set 'isEmployee' cookie with the value 'true', and set additional options
    res.cookie('isEmployee', true, { maxAge: 1000 * 60 * 60 * 24, httpOnly: true });
    // Send the response to the client
    res.send('you got the cookies');
});

app.get('/read-cookies', (req, res) => {
    // Read the cookies from the request object
    const cookies = req.cookies;
    // Log the cookies on the server console
    console.log(cookies);
    // Send the cookies back as a JSON response to the client
    res.json(cookies);
});