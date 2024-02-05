import personService from './services/persons.js'
import { useState, useEffect } from 'react'

const Names = ({ person, removeNumber }) => {
  return (
    <p>
      {person.name} {person.number} <button onClick={removeNumber}>delete</button>
    </p>
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
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
      })
  }, [])
  
  const removeById = id => {
    const toBeRemoved = filteredPersons.find(name => name.id === id)
    const deleteThis = { ...toBeRemoved}
    
    if (window.confirm(`Delete ${deleteThis.name}?`)) {
      personService
        .remove(id)
        }
    personService
      .getAll()
      .then(initialPersons => {
        setPersons(initialPersons)
        setNewName('')
        setNewNumber('')
      }
    )
  }

  const addName = (event) => {
    event.preventDefault()
    const changeNumber = filteredPersons.find(name => name.name === newName)
    const changeNumberId = changeNumber.id

  
    if (
      persons.map(name => name.name).includes(newName)
      )
//      persons[changeId] = newName;

    //    !etsi id persons-arraysta
      if (
        window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)
        ) {
          const newNameObject = {
            name: newName,
            number: newNumber,
            id: changeNumberId
          }

          personService
          .replace(changeNumberId, newNameObject)
          .then(response => {
            setPersons(persons.map(name => name.id !== changeNumberId ? name : response))
            setNewName('')
            setNewNumber('')          
          })
        }
    {      
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
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value)
  }
  const filteredPersons = newFilter
    ? persons.filter(name => name.name.toLowerCase().includes(newFilter.toLowerCase()) === true)
    : persons


  return (
    <div>
    <h2>Phonebook</h2>
    <Filter handleFilterChange={handleFilterChange}/>
    <h3>add a new</h3>
    <AddForm addName={addName} newName={newName} handleNameChange={handleNameChange} newNumber={newNumber} handleNumberChange={handleNumberChange}/>
    <h3>Numbers</h3>

    {filteredPersons.map(name =>
      <Names key={name.id} person={name} removeNumber={() => removeById(name.id)} />)}
    </div>
  )
    
}
export default App