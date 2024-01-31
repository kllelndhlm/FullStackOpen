import { useState } from 'react'

const Names = (props) => {
  return (
    <ul>
    {props.filteredNames.map(name =>
      <li key={name.id}>
      {name.name} {name.number}
    </li>

    )}
  </ul>
  )
}

const AddForm = (props) => {
  return (
    <form onSubmit={props.addName}>
      <div>name: <input
        value={props.newName}
        onChange={props.handleNameChange}
        />
      </div>
      <div>number: <input 
        value={props.newNumber}
        onChange={props.handleNumberChange}
        />
      </div>
      <button type="submit">add</button>
  </form>
  )
}

const Filter = (props) => {
  return (
    <form onSubmit={props.addFilter}> 
    <div>filter shown with<input
          value={props.newFilter}
          onChange={props.handleFilterChange}
          />
        </div>
    </form>
  )
}

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

  const filteredNames = names.filter(name => name.name.toLowerCase().includes(newFilter.toLowerCase()) === true)

  const handleNameChange = (event) => {
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
    <Filter addFilter={addFilter} newFilter={newFilter} handleFilterChange={handleFilterChange}/>
    <h3>add a new</h3>
    <AddForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
    <h3>Numbers</h3>
    <Names filteredNames={filteredNames}/>
  </div>
  )
}

export default App