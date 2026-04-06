const express = require('express')
const app = express()
app.use(express.json())

const morgan = require('morgan')
const cors = require('cors')
const Person = require('./models/person')

app.use(cors())
app.use(express.static('dist'))

const errorHandler = (error, request, response, next) => {
    console.log(error.message)

    if (error.name === 'CastError') {
        return response.status(400).send({ error: 'malformed input' })
    }

    next(error)
}

app.use(errorHandler)

morgan.token('postedPerson', (req) => {
    return JSON.stringify(req.body)
    })
app.use(morgan(':method :url :status :res[content-length] = :response-time ms :postedPerson'), )

{/* need to access the data from the request and include it in the logger output*/}
{/* morgan does not expose body by default so must create custom token for body */}

const baseURL = '/api/persons'

app.get(baseURL, (request, response) => {
    Person.find({}).then(persons => {
        console.log(persons)
        response.json(persons)
    })
})

app.get('/', (req, res) => {
  res.send('Phonebook backend is running');
});

app.get('/api/persons/:id', (request, response, next) => {
    Person.findById(request.params.id)
        .then(person => {
            if (person) {
                response.json(person)
            } else {
                response.status(404).end()
            }
        })
        .catch(result => next(result))
})

app.get('/info', (request, response) => {
    const date = new Date()
    response.send(
        `<div>
            <p>Phonebook has info for ${persons.length} people</p>
            <p>${date}</p>
        </div>`
    )
})

app.delete('/api/persons/:id', (request, response, next) => {
    Person.findByIdAndDelete(request.params.id)
        .then(person => {
            if (person) {
                response.status(204).end()
            } else {
                response.status(404).end()
            }
        })
        .catch(error => next(error))
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
        return response.status(400).json(
            { error: "missing content" }
        )
    }

    Person.findOne({ name: body.name }).then(existingPerson => {
        if (existingPerson) {
            return response.status(400).json(
                { error: "this phone number already exists as an entry" }
            )
        }

        const person = new Person({
            name: body.name,
            number: body.number,
        })

        person.save().then(savedPerson => {
            response.json(savedPerson)
        })
    })
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})