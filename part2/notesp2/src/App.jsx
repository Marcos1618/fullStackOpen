import { useState, useEffect } from 'react'
import axios from 'axios'
import Note from './Note'

const App = (props) => {
  const [notes, setNotes] = useState([])
  const [newNote, setNewNote] = useState('')
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
  }, [])
  console.log('render', notes.length, 'notes')

  const handleNoteChange = (event) => {
    setNewNote(event.target.value)
    console.log(event.target.value)
  }

  const hook = () => {
    console.log('effect')
    axios
      .get('http://localhost:3001/notes')
      .then(response => {
        console.log('promise fulfilled')
        setNotes(response.data)
      })
    }

  useEffect(hook, [])
  console.log('render', notes.length, 'notes')

  const addNote = (event) => {
    event.preventDefualt()
    console.log('button clicked', event.target)
    const noteObject = {
      content: event.target,
      important: Math.random() < 0.5,
      id: String(notes.length+1)
    }
    setNotes(notes.concat(noteObject))
    setNewNote('')
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notes.map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </ul>
      <div>
        <form onClick={addNote}>
          <input value={newNote} onChange={handleNoteChange}></input>
          <button type="submit">save</button>
        </form>
      </div>
    </div>
  )
}

export default App