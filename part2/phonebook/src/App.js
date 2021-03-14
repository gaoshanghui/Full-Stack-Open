import React, { useEffect, useState } from 'react'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Persons from './components/Persons'
import personsService from './services/persons'

const App = () => {
  const [persons, setPersons] = useState([])
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

  useEffect(() => {
    personsService
      .getAll()
      .then(response => {
        setPersons(response)
      })
  }, [])

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value);
  }

  const handleAdd = (event) => {
    event.preventDefault();

    // If the person's information is already in the phonebook, the application confirm the action from the user:
    const existTest = persons.find((person) => person.name === newName);

    if (existTest) {
      const existPersonId = persons.find((person) => person.name === newName).id;
      if (window.confirm(`${newName} is already existed, replace the old number to a new one?`)) {
        // update 
        personsService.update(existPersonId, { name: newName, number: newNumber })
          .then(response => {
            const newPersons = persons.map((person) => {
              return person.id === response.id ? response : person
            })
            setPersons(newPersons)
            setNewName('');
            setNewNumber('');
          })
      } 
    } else {
      // add the new name into the database
      personsService
        .create({ name: newName, number: newNumber })
        .then(response => setPersons(persons.concat({ ...response })))

        // Reset name and number input.
        setNewName('');
        setNewNumber('');
    }
  }

  const handleFilterChange = (event) => {
    setNewFilter(event.target.value);
  }

  const handleDeletePerson = (id) => {
    if (window.confirm("Do you really want to delete the contact?")) {
      personsService.deleteObject(id)
        .then(() => {
          setPersons(persons.filter((person) => person.id !== id))
        })
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Filter newFilter={newFilter} handleFilterChange={handleFilterChange} />
      <h2>Add a new contact</h2>
      <PersonForm
        handleAdd={handleAdd}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <Persons persons={persons} newFilter={newFilter} deletePerson={handleDeletePerson} />
    </div>
  )
}

export default App