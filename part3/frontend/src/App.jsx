import { useState } from 'react'
import { useEffect } from 'react'
import AddPerson from './AddPerson.jsx'
import FilterPersons from './FilterPersons'
import DisplayPersons from './DisplayPersons'
import axios from 'axios'
import personService from './services'
import Notification from './Notification'

const App = () => {

  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [persons, setPersons] = useState([])
  const [message, setMessage] = useState('')
  const [messageStyle, setMessageStyle] = useState({})

  const successStyle = {
    color: 'green',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
}

  const errorStyle = {
    color: 'red',
    background: 'lightgrey',
    fontSize: '20px',
    borderStyle: 'solid',
    borderRadius: '5px',
    padding: '10px',
    marginBottom: '10px'
}

  useEffect(() => {
      console.log('effect')
      personService
        .getAll()
        .then(initialPersons => 
          setPersons(initialPersons)
        )
    }, [])

  const handleNewFilter = (event) => {
    console.log('new filter', event.target.value)
    setNewFilter(event.target.value)
  }

  const handleNewName = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNewNumber = (event) => {
    console.log(event.target.value)
    setNewNumber(event.target.value)
  }

  const removePerson = (id) => {
    if (window.confirm('delete person?')){
    const newPersons = persons.filter(person => person.id !== id)
    personService
      .remove(id)
      .then(setPersons(newPersons))
      .then(response => console.log(response))
    }
  }

  const addPerson = (event) => {
    console.log(newNumber)
    event.preventDefault()
    const person = persons.find(person => person.name === newName)

    if (person){
      if (window.confirm(`${person.name} is already in the phonebook, replace the old number with the new one?`)){
        personService
          .update(person.id, {...person, number: newNumber})
          .then(returnedPerson => {
            setPersons(persons.map(p => p.name === newName ? returnedPerson : p))
            console.log("updated person object " + returnedPerson.name)
            }
          )
          .catch(error => {
            setMessageStyle(errorStyle)
            setMessage(`${person.name} has already been removed from the server`)
            }
          )
          
          setMessageStyle(successStyle)
          setMessage(`${newName} updated with phone number ${newNumber}`)
          setTimeout(() => {
            setMessage(null)
          }, 5000)
      }
    }
    else {
      const newPerson = {
      name: newName,
      number: newNumber
      }
      personService
        .create(newPerson)
        .then(returnedPerson => {
          setPersons(persons => persons.concat(returnedPerson))
        })
    setNewName('')
    setNewNumber('')
    setMessageStyle(successStyle)
    setMessage(`${newPerson.name} was added to the phonebook`)
    setTimeout(() => {
      setMessage(null)
      }, 5000)
    }
  }

  const personsToShow = showAll ? persons : persons.filter(person => person.name.toLowerCase().includes(newFilter.toLowerCase()))

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={message} style={messageStyle}></Notification>
      <FilterPersons 
        newFilter={newFilter}
        handleNewFilter={handleNewFilter}
        showAll={showAll}
        setShowAll={setShowAll}
      />
      <AddPerson
        addPerson={addPerson}
        newName={newName}
        handleNewName={handleNewName}
        newNumber={newNumber}
        handleNewNumber={handleNewNumber}
      />
      <h2>Numbers</h2>
        <DisplayPersons
          personsToShow={personsToShow} removePerson={removePerson}
        />
    </div>
  )
}

export default App