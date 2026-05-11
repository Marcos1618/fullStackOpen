require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const Blog = require('./models/blog')
const config = require('./utils/config')
const logger = require('./utils/logger')
const blogsRouter = require('./controllers/blogs.js')
const app = express()

mongoose.connect(config.URL, { family: 4 })

app.use(express.json())
app.use('/api/blogs', blogsRouter)

module.exports = app