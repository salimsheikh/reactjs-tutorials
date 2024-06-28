import React from 'react';
import Person from './person';

export default function ObjectList() {
    const persons = [
        {
            id: 1,
            name: 'Bruce',
            age: 30,
            skill: 'React'
        },
        {
            id: 2,
            name: 'Clark',
            age: 35,
            skill: 'Angular'
        },
        {
            id: 3,
            name: 'Diana',
            age: 28,
            skill: 'Vue'
        },
        {
            id: 4,
            name: 'Barry',
            age: 32,
            skill: 'Node.js'
        },
        {
            id: 5,
            name: 'Hal',
            age: 27,
            skill: 'JavaScript'
        },
        {
            id: 6,
            name: 'Arthur',
            age: 31,
            skill: 'TypeScript'
        },
        {
            id: 7,
            name: 'Victor',
            age: 29,
            skill: 'Python'
        },
        {
            id: 8,
            name: 'Oliver',
            age: 33,
            skill: 'Ruby'
        },
        {
            id: 9,
            name: 'John',
            age: 26,
            skill: 'Java'
        },
        {
            id: 10,
            name: 'Dinah',
            age: 34,
            skill: 'C++'
        }
    ];
    // const output = persons.map(person => <li key={person.id}>{person.name}</li>)
    const output = persons.map(person => <Person key={person.id} person={person} />);
  return (
    <div>
      <ul>{output}</ul>
    </div>
  );
}
