const mongoose = require('mongoose')
const { isEmail } = require('validator')
const bcrypt = require('bcrypt')

//Schema
// Defines Document Struture in the Database
const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [(isEmail) => { }, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter a password'],
        minlength: [6, 'Minium password length is 6 characters']
    }
})

// fire a function after a doc saved to db 
userSchema.post('save', function (doc, next) {
    console.log('new user was created and saved', doc)
    next()
})


//fire a function before doc saved to database
userSchema.pre('save', async function (next) {
    const salt = await bcrypt.genSalt()
    this.password = await bcrypt.hash(this.password, salt)
    next()
})



//Model
// IMPORTANT - Must be the singular of whatever name was given to the Database
//can use model inside our controler methods to interact with the collection in the database 
const User = mongoose.model('user', userSchema)

module.exports = User