const mongoose = require('mongoose')

const Schema = mongoose.Schema;



//Schema
//Creates the table for our database
//shows the structure we want to store in our models and validation rules for the models ensurs integrity for database
const eventSchema = new Schema({
    eventName: {
        type: String,
        required: true
    },
    location: String,
    startTime: String,
    description: String,
    price: String,
}, { timestamps: true })




//Model
// Must abide by the rules of the Schema 
//Provides us with an interface to communicate directly with the database
const Event = mongoose.model('Event', eventSchema)
module.exports = Event
