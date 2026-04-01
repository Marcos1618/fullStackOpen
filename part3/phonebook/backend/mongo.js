// create database for phonebook that allows for 
//  adding entries 
//  listing all existing entries
// the program is used by 
//  passing in your password as the 1st arg
//  passing Name as 2nd arg (if the name contains white space it must be enclosed in quotes)
//  passing Number as 3rd arg
//  if only the password is passed the program should display all entries

const mongoose = require('mongoose')

if (process.argv.length < 3) {
    console.log('program requires password as command line argument')
    process.exit()
}

const password = process.argv[2]

// set up connection to the database
const url = `mongodb+srv://marcosbarrera445_db_user:${password}@fullstackopenp3.d9yzkuy.mongodb.net/phonebook?appName=FullStackOpenP3`

mongoose.set('strictQuery', false)

mongoose.connect(url, {family: 4})


// create the schema 
const personSchema = {
    name: String,
    number: Number
}

// create the model
const Person = mongoose.model("Person", personSchema) 

if (process.argv.length === 3){
    Person.find({}).then(result => {
        console.log(result)
        mongoose.connection.close()
    })
}

// edge case for too many args
if (process.argv.length > 5) {
    console.log("Supported arguments include password, name, and number. Ensure if name includes whitespace that it is in quotes e.g. 'Ava Lovelace'")
    process.exit()
} 

// add the person 
if (process.argv.length > 3) {
    const person = new Person({
    name: process.argv[3],
    number: process.argv[4]
    })

    person.save().then(result => {
        console.log('note saved!')
        mongoose.connection.close()
    })
}
