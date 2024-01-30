import { useState } from 'react'

const App = () => {
  const [names, setNames] = useState([
    { name: 'Arto Hellas', number: '040-123456', id: 1 },
    { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
    { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
    { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState('')

  const addName = (event) => {
    event.preventDefault()
    if (names.map(name => name.name).includes(newName)) 
      return (
        alert(`${newName} is already added to phonebook`)
      )
    const nameObject = {
      name: newName,
      number: newNumber,
      id: names.length + 1
    }
  
    setNames(names.concat(nameObject))
    setNewName('')
    setNewNumber('')
  }

  const namesToShow = showAll
    ? names
    : names.filter(name => name.name.toLowerCase().includes(newFilter.toLowerCase()) === true)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
    setShowAll(!showAll)
  }

  const addFilter = (event) => {
    event.preventDefault()
  }

  return (
    <div>
    <h2>Phonebook</h2>
    <form onSubmit={addFilter}> 
    <div>filter shown with<input
          value={newFilter}
          onChange={handleFilterChange}
          />
        </div>
  </form>
      <h2>add a new</h2>
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
        {namesToShow.map(name =>
          <li key={name.id}>
          {name.name} {name.number}
        </li>

        )}
      </ul>
    </div>
  )

}

export default App