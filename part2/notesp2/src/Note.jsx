const Note = ({ note }) => {
  console.log(note, note.content)
  return <li>{note.content}</li>
}

export default Note