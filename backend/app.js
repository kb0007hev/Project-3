const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors') // access the server from different domains 
const bodyParser = require('body-parser') //form Posts 
const router = require('./routes/router')


const Event = require('./models/event');

const app = express();

// Body Parser
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

// Cors 
const corsOptions = {
    origin: '*',
    credentials: true,
    optionSuccessStatus: 200
}
app.use(cors(corsOptions))


//Router 
app.use('/', router)


const DB = "mongodb+srv://kevin:test789@cluster0.sk6mdok.mongodb.net/Events?retryWrites=true&w=majority";

// Database connection
mongoose.connect(DB, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(() => {
        console.log("Connected to the database");
    })
    .catch((err) => {
        console.log("Error connecting to the database:", err);
        // Handle the error appropriately, such as exiting the process or displaying an error message
    });

// Model 
app.get('/add-event', (req, res) => {
    console.log('Inside /add-event route');

    const event = new Event({
        eventName: "Poker Night 3",
        location: "Dearborn, MI",
        startTime: "8:00pm",
        description: "let's get it",
        price: "As much as you want to lose",
    });

    event.save()
        .then((savedEvent) => {
            res.send(savedEvent);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error saving event");
        });
});

app.get('/all-events', (req, res) => {
    Event.find()
        .then((result) => {
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error fetching events");
        });
});


app.get('/single-blog', (req, res) => {
    Event.findById('65ba01ff2f150d44e86529dc')
        .then((result) => { // Add the parameter to receive the result
            res.send(result);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).send("Error fetching events");
        });
});


//Event Routes
//Using res.render()
// app.get('/', (req, res) => {
//     Blog.find()
//     .then((result) => {

//     })
//     .catch((err) =>{
//         console.log(err)
//     })



// const Events = [
//     {
//       eventName: "Music Festival",
//       location: "City Park",
//       date: "2022-07-15"
//     },
//     {
//       eventName: "Art Exhibition",
//       location: "Art Gallery",
//       date: "2022-08-20"
//     },
//     {
//       eventName: "Food Fair",
//       location: "Town Square",
//       date: "2022-09-10"
//     }
//   ];
// }); 

// Start the server
app.listen(4000, () => {
    console.log('Server listening on port 4000');
});