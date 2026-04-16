const mongoose = require('mongoose')
mongoose.set('strictQuery', false)
require('dotenv').config()

const url = process.env.MONGODB_URI
console.log(url)

mongoose.connect(url, { family: 4 })
    .then(result => {
        console.log('connected to mongodb')
    })
    .catch(error => {
        console.log('could not connect to mongodb ', error.message)
    })

const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
    },
    number: String,
})

personSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        console.log(returnedObject)
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Person = mongoose.model('Person', personSchema)



module.exports = Person