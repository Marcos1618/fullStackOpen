const mongoose = require('mongoose')
mongoose.set('strictQuery', false)

const url = process.env.MONGODB_URI
console.log(url)

mongoose.connect(url, { family: 4 })
    .then(result => {
        console.log('connected to mongodb')
    })
    .catch(error => {
        console.log('could not connect to mongodb ', error.message)
    })

const numberValidator = (number) => {
    if (!number.includes('-')) {
        throw new Error('Phone number must include a hyphen (format: XX-XXX or XXX-XXXX)')
    }
    
    const numberParts = number.split('-')
    if (numberParts.length !== 2) {
        throw new Error('Phone number must have exactly one hyphen')
    }
    
    const [part1, part2] = numberParts
    if (![2, 3].includes(part1.length)) {
        throw new Error(`First part must be 2 or 3 digits, got ${part1.length}`)
    }
    
    if (part1.length + part2.length <= 8) {
        throw new Error(`Total digits must exceed 8, got ${part1.length + part2.length}`)
    }
    
    return true
}


const personSchema = new mongoose.Schema({
    name: {
        type: String,
        minLength: 5,
        required: true,
    },
    number: {
        type: String,
        minLength: 8,
        required: true,
        validate: numberValidator
    },
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