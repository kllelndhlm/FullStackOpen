import personService from './services/persons.js'
import { useState, useEffect } from 'react'
import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

const Names = (props) => {
  const filteredNames = props.persons.filter(name => name.name.toLowerCase().includes(props.newFilter.toLowerCase()) === true)
  return (
    <ul>
    {filteredNames.map(name =>
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
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  

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

    personService
      .create(nameObject)
        .then(response => {
        setPersons(persons.concat(response))
        setNewName('')
        setNewNumber('')
      })
  }
  console.log({persons})


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
    <Names persons={persons} newFilter={newFilter}/>
  </div>
  )
}

export default App