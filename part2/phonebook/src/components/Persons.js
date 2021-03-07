import React from 'react'

const Persons = ({ persons, newFilter }) => {
  return (
    <ul>
      {persons.filter((person) => {
        const re = new RegExp(newFilter, 'gi');
        return re.test(person.name);
      }).map((person) => <li key={person.id}>{person.name} {person.number}</li>)}
    </ul>
  )
}

export default Persons

