require('dotenv').config()

const URL = process.env.MONGODB_URL
const PORT = process.env.PORT
console.log('something else', URL, PORT)

module.exports = {URL, PORT}