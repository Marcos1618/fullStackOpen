const AddPerson = ({addPerson, newName, handleNewName, newNumber, handleNewNumber}) => {
    return (
    <form onSubmit={addPerson}>
        <div>
            <h3>Add Entry</h3>
            <p>name: <input value={newName} onChange={handleNewName}/></p>
            <p>number: <input value={newNumber} onChange={handleNewNumber}/></p>
            <button type="submit">add</button>
        </div>
    </form>
    )
}

export default AddPerson;

