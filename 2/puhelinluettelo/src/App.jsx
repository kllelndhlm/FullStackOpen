import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
    number: '12345',
    id: 1}
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (persons.map(name => name.name).includes(newName)) 
      return (
        alert(`${newName} is already added to phonebook`)
      )
    const nameObject = {
      name: newName,
      number: newNumber,
      id: persons.length + 1
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addName}>
        <div>name: <input
          value={newName}
          onChange={handleNameChange}
          />
        </div>
        <div>number: <input 
          value={newNumber}
          onChange={handleNumberChange}
          />
        </div>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map(name => 
          <li key={name.id}>
            {name.name} {name.number}
          </li>
        )}
      </ul>
    </div>
  )

}

export default App