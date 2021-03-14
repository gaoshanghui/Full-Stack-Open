import React from 'react'
import Person from './Person'

const Persons = ({ persons, newFilter, deletePerson }) => {
  return (
    <ul>
      {
        persons.filter((person) => {
          const re = new RegExp(newFilter, 'gi');
          return re.test(person.name);
        })
          .map((person) => {
            return (
              <Person
                key={person.id}
                name={person.name}
                number={person.number}
                deletePerson={() => deletePerson(person.id)}
              />
            )
          })
      }
    </ul>
  )
}

export default Persons

