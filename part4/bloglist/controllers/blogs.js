const blogsRouter = require('express').Router()
const Blog = require('../models/blog')

blogsRouter.get('/', (request, response) => {
    Blog.find({}).then(blogs => {
        response.json(blogs)
    })
})

blogsRouter.get('/:id', (request, response) => {
    Blog.findById(request.params.id)
        .then(blog => {
            if (blog) {
                response.json(blog)
            } else {
                response.status(404).end()
            }
        })
        .catch(error => error(error))
})

blogsRouter.post('/', (request, response) => {
    const body = request.body

    const blog = new Blog({
        name: body.name,
        author: body.author,
        url: body.url,
        likes: body.likes
    })

    blog.save().then((result) => {
        response.status(201).json(result)
    })
})

module.exports = blogsRouter