import { useState, useEffect } from 'react'
import axios from 'axios'

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
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    console.log('effect')
    axios
      .get('http://localhost:3001/persons')
      .then(response => {
        console.log('promise fulfilled')
        setPersons(response.data)
      })
  }, [])
  console.log('render', persons.length, 'persons')

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

  const filteredNames = persons.filter(name => name.name.toLowerCase().includes(newFilter.toLowerCase()) === true)

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