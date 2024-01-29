import { useState } from 'react'

const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas' ,
    id: 1}
  ]) 
  const [newName, setNewName] = useState('')

  const addName = (event) => {
    event.preventDefault()
    const nameObject = {
      name: newName,
      id: persons.length + 1
    }
  
    setPersons(persons.concat(nameObject))
    setNewName('')
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  return (
    <div>
      <h2>Phonebook</h2>
      Name
      <form onSubmit={addName}>
          <input
            value={newName}
            onChange={handleNameChange}
          />
          <button type="submit"><address></address>add</button>
      </form> 
      <h2>Numbers</h2>
      <ul>
        {persons.map(name => 
          <li key={name.id}>
            {name.name}
          </li>
        )}
      </ul>
    </div>
  )

}

export default App